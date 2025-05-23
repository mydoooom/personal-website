"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from '@/i18n/navigation'

interface LocaleSwitcherSelectProps {
  options: Array<{
    value: string;
    label: string;
  }>
  defaultValue: string;
  label: string;
}

export default function LocaleSwitcherSelect ({ options, defaultValue, label }: LocaleSwitcherSelectProps) {
  const { push } = useRouter();

  function onSelectChange (value: string) {
      push('/', { locale: value });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[8rem]">
        <SelectValue placeholder={label}/>
      </SelectTrigger>
      <SelectContent>
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
