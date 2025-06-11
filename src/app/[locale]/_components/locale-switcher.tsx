import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n/routing';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    const options = locales.map(currentLocale => {
        return {
            value: currentLocale,
            label: t('locale', { locale: currentLocale }),
        };
    });

    return <LocaleSwitcherSelect options={options} defaultValue={locale} label={t('label')} />;
}
