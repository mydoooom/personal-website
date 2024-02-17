'use client';

import { ReactNode, useTransition } from 'react';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePathname, useRouter } from '../navigation';

interface LocaleSwitcherSelectProps {
    children: ReactNode;
    defaultValue: string;
    label: string;
}

export default function LocaleSwitcherSelect({ children, defaultValue, label }: LocaleSwitcherSelectProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(value: string) {
        startTransition(() => {
            router.replace(pathname, { locale: value });
        });
    }

    return (
        <Select defaultValue={defaultValue} disabled={isPending} onValueChange={onSelectChange}>
            <SelectTrigger className="w-[8rem]">
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>{children}</SelectContent>
        </Select>
    );
}
