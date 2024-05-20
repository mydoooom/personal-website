'use client';
import { Button } from '@/components/ui/button';
import { SunIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';

export default function DarkModeSwitcher() {
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSwitchDarkMode);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleSwitchDarkMode);
        };
    }, []);

    const handleSwitchDarkMode = () => {
        console.log(document.body.classList);
        document.body.classList.toggle('dark');
    };

    return (
        <Button className="rounded-full" size="icon" variant="outline" onClick={handleSwitchDarkMode}>
            <SunIcon />
        </Button>
    );
}
