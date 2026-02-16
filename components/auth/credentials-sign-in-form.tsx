"use client";
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignUpDefaultValues } from '@/lib/constants';
import { authClient } from '@/lib/auth-client';

export default function CredentialsSignInForm() {
        async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
            evt.preventDefault();
            const formData = new FormData(evt.currentTarget);
            const email = String(formData.get("email"));
            const password = String(formData.get("password"));

            // Comprobaciones de los campos del formulario

            if (!email || !password) return; // Más adelante, crear una variable de error

            await authClient.signIn.email (
                {
                    email,
                    password,
                    callbackURL: "/profile",
                },
                {
                    onRequest: () => {},
                    onResponse: () => {},
                    onError: (ctx) => {
                        console.log(ctx.error.message);
                    },
                    onSuccess: () => {
                        console.log("Login correcto");
                    },
                }
            )
        }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email" 
                type="text" 
                required
            />
        </div>
        <div className="space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password" 
                name="password" 
                type="text" 
                required
            />
        </div>
        <div>
            <Button className="w-full" type="submit">Sign In</Button>
        </div>
    </form>
  )
}
