"use client";
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SignUpDefaultValues } from '@/lib/constants';

export default function CredentialsSignUpForm() {
  return (
    <form>
        <div className="space-y-6">
            <Label htmlFor="name">Name</Label>
            <Input 
                id="name" 
                name="name" 
                type="text" 
                defaultValue={SignUpDefaultValues.name}
                required
            />
        </div>
        <div className="space-y-6">
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email" 
                type="text" 
                defaultValue={SignUpDefaultValues.email}
                required
            />
        </div>
        <div className="space-y-6">
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
            <Button className="w-full">Sign Up</Button>
        </div>
    </form>
  )
}
