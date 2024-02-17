import { SelectItem } from '@/components/ui/select';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '../localesConfig';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            {locales.map(currentLocale => (
                <SelectItem key={currentLocale} value={currentLocale}>
                    {t('locale', { locale: currentLocale })}
                </SelectItem>
            ))}
        </LocaleSwitcherSelect>
    );
}
