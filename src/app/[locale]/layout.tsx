import Navigation from '@/components/Navigation';
import { Providers } from '@/components/Providers'
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Tran Viet Anh',
    description: 'A personal website of Tran Viet Anh',
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: ReactNode;
    params: {
        locale: string;
    };
}) {
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
