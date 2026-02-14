"use client";
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';

export default function SignOutButton() {
  return (
    <Button onClick={() => authClient.signOut()} variant={'destructive'}>
        Sign Out
    </Button>
  )
}
