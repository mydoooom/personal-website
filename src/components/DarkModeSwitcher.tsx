'use client';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

export default function DarkModeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            document.body.classList.add('dark');
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSwitchDarkMode);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSwitchDarkMode);
        };
    }, []);

    const handleSwitchDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <Button className="rounded-full" size="icon" variant="outline" onClick={handleSwitchDarkMode}>
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}
