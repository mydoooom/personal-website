import { useTranslations } from 'next-intl';

export const Hero = () => {
    const t = useTranslations('Index');

    return (
        <>
            <div className="h-screen flex items-center">
                <div className="grid grid-cols-[1fr_3fr] items-start gap-10 prose prose-slate dark:prose-invert">
                    <p>{t('hello')}</p>
                    <div className="flex flex-col">
                        <h1 className="m-0"> Tran Viet Anh</h1>
                        <em>{t('web-developer')}</em>
                    </div>
                </div>
            </div>
        </>
    );
};
