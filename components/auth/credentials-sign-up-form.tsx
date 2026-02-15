"use client";
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignUpDefaultValues } from '@/lib/constants';
import { authClient } from '@/lib/auth-client';

export default function CredentialsSignUpForm() {
        async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
            evt.preventDefault();
            const formData = new FormData(evt.currentTarget);
            const name = String(formData.get("name"));
            const email = String(formData.get("email"));
            const phone = String(formData.get("phone"));
            const password = String(formData.get("password"));

            // Comprobaciones de los campos del formulario

            if (!name || !email || !password) return; // Más adelante, crear una variable de error

            await authClient.signUp.email (
                {
                    email,
                    password,
                    name,
                    phone,
                },
                {
                    onRequest: () => {},
                    onResponse: () => {},
                    onError: (ctx) => {
                        console.log(ctx.error.message);
                    },
                    onSuccess: () => {
                        console.log("Registro correcto");
                    },
                }
            )
        }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-3">
            <Label htmlFor="name">Name</Label>
            <Input 
                id="name" 
                name="name" 
                type="text" 
                defaultValue={SignUpDefaultValues.name}
                required
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email" 
                type="text" 
                defaultValue={SignUpDefaultValues.email}
                required
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="phone">Phone <span className="text-muted-foreground">(Opcional)</span></Label>
            <Input 
                id="phone" 
                name="phone" 
                type="text" 
                defaultValue={SignUpDefaultValues.phone}
                required
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password" 
                name="password" 
                type="text" 
                defaultValue={SignUpDefaultValues.password}
                required
            />
        </div>
        <div>
            <Button className="w-full" type="submit">Sign Up</Button>
        </div>
    </form>
  )
}
