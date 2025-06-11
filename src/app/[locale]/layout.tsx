import Navigation from '@/components/Navigation';
import { Providers } from '@/components/Providers';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tran Viet Anh',
    description: 'A personal website of Tran Viet Anh',
};

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <Navigation />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
