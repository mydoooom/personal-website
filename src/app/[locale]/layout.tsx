import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Providers } from "../_components/providers";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { routing } from "@/i18n/routing";

const spaceGrotesk = Space_Grotesk({
  subsets: ["vietnamese"],
  variable: "--font-space-grotesk",
});
const huninn = localFont({
  src: "../fonts/jf-openhuninn.woff2",
  variable: "--font-huninn",
});

export const metadata: Metadata = {
  title: "Tran Viet Anh",
  description: "A personal website of Tran Viet Anh",
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
      <body
        className={`${spaceGrotesk.variable} ${huninn.variable} font-combined grid grid-rows-[auto 1fr auto] min-h-screen bg-bg dark:bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:69px_69px]`}
      >
        <Providers>
          <Header className="row-1" />
          <main className="container row-2">{children}</main>
          <Footer className="row-3" />
        </Providers>
      </body>
    </html>
  );
}
