"use client";
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignUpDefaultValues } from '@/lib/constants';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import Link from "next/link";

export default function CredentialsSignUpForm() {
        const [error, setError] = useState<string | null>(null);

        const [notMethod, setNotMethod] = useState<"mail" | "phone">(
            (SignUpDefaultValues as any).notMethod ?? "mail",
        );

        async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
            evt.preventDefault();
            const formData = new FormData(evt.currentTarget);
            const name = String(formData.get("name"));
            const email = String(formData.get("email"));
            const phone = String(formData.get("phone"));
            const password = String(formData.get("password"));
            const confirmPassword = String(formData.get("confirmPassword"));
            const termsConditions = String(formData.get("termsConditions"));
            const notifications = String(formData.get("notifications"));

            // Comprobaciones de los campos del formulario

            if (!name || !email) {
                setError("ERROR: Por favor, rellene los campos obligatorios para registrarse.");
                return;
            }

            if (password !== confirmPassword) {
                setError("ERROR: La contraseña no coincide.");
                return;
            }

            if (!termsConditions) {
                setError("ERROR: Es necesario marcar la opción de términos y condiciones para registrarse.");
                return;
            }

            if (!notifications) {
                setError("ERROR: Es necesario marcar una de las dos opciones de notificaciones para registrarse.");
                return;
            }

            await authClient.signUp.email (
                {
                    email,
                    password,
                    name,
                    phone,
                    notifications: notMethod,
                },
                {
                    onRequest: () => {},
                    onResponse: () => {},
                    onError: (ctx) => {
                        setError(ctx.error.message);
                        toast.error(ctx.error.message);
                        console.log(ctx.error.message);
                    },
                    onSuccess: () => {
                        setError(null);
                        toast.success("Registro correcto");
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
                required
            />
        </div>
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
            <Label htmlFor="phone">Phone <span className="text-gray-250">(optional)</span></Label>
            <Input 
                id="phone"
                name="phone"
                type="text"
                required={notMethod === "phone"}
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
        <div className="space-y-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
                id="confirmPassword"
                name="confirmPassword"
                type="text"
                required
            />
        </div>
        <div className="space-y-3">
            <div className="flex items-center space-x-2">
                <Checkbox
                    id="termsConditions"
                    name="termsConditions"
                    required
                />
                <Label htmlFor="termsConditions">I agree to the terms and conditions</Label>
            </div>
        </div>
        <div className="space-y-3">
            <Label htmlFor="communication">How do you want to receive communications?</Label>
            <div className="flex items-center gap-4">
                <Label className="flex items-center space-x-2">
                    <input 
                        type="radio"
                        name="communication"
                        value="mail"
                        checked={notMethod === "mail"}
                        onChange={() => setNotMethod("mail")}
                    />
                    <span>Mail</span>
                </Label>
                <Label className="flex items-center space-x-2">
                    <input 
                        type="radio"
                        name="communication"
                        value="phone"
                        checked={notMethod === "phone"}
                        onChange={() => setNotMethod("phone")}
                    />
                    <span>Phone</span>
                </Label>
            </div>
        </div>
        <div>
            <Button className="w-full" type="submit">Sign Up</Button>
            {error && (
                <div className="mt-2 text-center">{error}</div>
            )}
            <div className="mt-2 text-center space-x-2">
                <span className="text-muted-foreground">Do you have an account?</span>
                <Link href="/sign-in" className="underline text-muted-foreground">Sign In</Link>
            </div>
        </div>
    </form>
  )
}
