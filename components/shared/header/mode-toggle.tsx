'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { DropdownMenu, 
        DropdownMenuTrigger, 
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuContent,
        DropdownMenuCheckboxItem
    } from '@/components/ui/dropdown-menu';
import { SunIcon, MoonIcon, SunMoon, BadgeDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Cuando arranca esto se va a ejecutar
    useEffect(() => {
        setMounted(true);
    }, []);

    // Si no hay nada, no dibujará nada
    if (!mounted) return null;

    const temas = ["system", "light", "dark", "retro"];
    const cambioTema = () => {
        const t = typeof theme === "string" ? theme : "system";
        if (t === "system") {
            setTheme(temas[1]);
        } else if (t === "light") {
            setTheme(temas[2]);
        } else if (t === "dark") {
            setTheme(temas[3]);
        } else {
            setTheme(temas[0]);
        }
    };
  return (
    <Button
        variant={"ghost"}
        className='focus-visible:ring-0 focus-visible:ring-offset-0'
        onClick={cambioTema}
        aria-label={`Theme: ${theme}. Clic to change`}
        title={`Theme: ${theme}. Clic to change`}
    >
        {theme === "system" ? (
            <SunMoon />
        ) : theme === "light" ? (
            <SunIcon />
        ) : theme === "dark" ? (
            <MoonIcon />
        ) : (
            <BadgeDollarSign />
        )}
    </Button>
  )
}
