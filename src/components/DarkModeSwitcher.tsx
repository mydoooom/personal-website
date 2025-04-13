'use client';

import { useTranslations } from 'next-intl';
import { forwardRef, ReactNode, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem } from '@/components/ui/select';
import { CaretDownIcon, DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { SelectTrigger, Icon } from '@radix-ui/react-select';
import { useTheme } from 'next-themes';

interface ThemeButtonProps {
    title: string;
    icon: ReactNode;
    handleSwitchTheme?: () => void;
}

// The forwardRef function is necessary when using asChild
const ThemeComboButton = forwardRef<HTMLDivElement, ThemeButtonProps>(
    ({ title, icon, handleSwitchTheme, ...rest }, ref) => {
        return (
            <div className="flex justify-between gap-1" title={title}>
                <Button onClick={handleSwitchTheme} className="rounded-full" size="icon" variant="outline">
                    {icon}
                </Button>
                <div ref={ref} className="h-[100%] flex items-center cursor-pointer" {...rest}>
                    <Icon asChild>
                        <CaretDownIcon className="h-4 w-4 opacity-50" />
                    </Icon>
                </div>
            </div>
        );
    },
);

export default function DarkModeSwitcher() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const t = useTranslations('ThemeSwitcher');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <ThemeComboButton title="" icon="" />;

    return (
        <Select value={theme} onValueChange={value => setTheme(value)}>
            <SelectTrigger asChild>
                <ThemeComboButton
                    title={t('change-theme')}
                    icon={resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
                    handleSwitchTheme={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="system">
                    <span className="flex items-center gap-2">
                        <DesktopIcon />
                        {t('system')}
                    </span>
                </SelectItem>
                <SelectItem value="light">
                    <span className="flex items-center gap-2">
                        <SunIcon />
                        {t('light')}
                    </span>
                </SelectItem>
                <SelectItem value="dark">
                    <span className="flex items-center gap-2">
                        <MoonIcon />
                        {t('dark')}
                    </span>
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
