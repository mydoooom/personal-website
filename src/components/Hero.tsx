import { useLocale, useTranslations } from 'next-intl';

export const Hero = () => {
    const locale = useLocale();
    const t = useTranslations('Index');

    return (
        <>
            <div className="h-screen flex justify-center sm:justify-normal items-center">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
                    <strong>{t('hello')}</strong>
                    <div className="flex flex-col">
                        <h1 className="m-0 mb-2 text-5xl md:text-7xl animate-slide-in-left">
                            <span className="text-teal-600 dark:text-teal-500">{t('surname')}</span>
                            {`${locale !== 'zh' ? ' ' : ''}${t('name')}`}
                        </h1>
                        <em className="pl-1">👨🏻‍💻 {t('web-developer')}</em>
                    </div>
                </div>
            </div>
        </>
    );
};
