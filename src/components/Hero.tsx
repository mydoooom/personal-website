import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export const Hero = () => {
    const locale = useLocale();
    const t = useTranslations('Index');

    return (
        <>
            <div className="h-screen flex justify-center sm:justify-normal items-center">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start gap-5 prose prose-slate dark:prose-invert max-w-none">
                    <strong className="md:text-right">{t('hello')}</strong>
                    <div className="flex flex-col">
                        <div className="flex mb-3 gap-3 flex-col-reverse md:flex-row md: md:gap-8 justify-normal md:items-center">
                            <h1 className="m-0 text-5xl md:text-7xl animate-slide-in-left">
                                <span className="text-teal-600 dark:text-teal-500">{t('surname')}</span>
                                {`${locale !== 'zh' ? ' ' : ''}${t('name')}`}
                            </h1>
                            <Dialog>
                                <DialogTrigger>
                                    <Image
                                        className="m-0 w-20 aspect-square md:scale-[130%] rounded-full shadow-2xl transition duration-200 md:hover:scale-[135%]"
                                        src="https://fqbfpjkbbnujuxty.public.blob.vercel-storage.com/portrait-kSYDBT6p1WNHR8sQib0S5ODiZ20fTl"
                                        alt="portrait"
                                        width={200}
                                        height={200}
                                    />
                                </DialogTrigger>
                                <DialogContent className="!rounded-full h-auto w-[90%] max-w-max">
                                    <Image
                                        src="https://fqbfpjkbbnujuxty.public.blob.vercel-storage.com/portrait-kSYDBT6p1WNHR8sQib0S5ODiZ20fTl"
                                        alt="portrait"
                                        width={500}
                                        height={500}
                                        className="m-0 w-full aspect-square rounded-full"
                                    />
                                </DialogContent>
                            </Dialog>
                        </div>
                        <p className="my-0 md:pl-4">
                            👨🏻‍💻 <em>{t('web-developer')}</em>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
