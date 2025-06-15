import { Navigation } from "./_components/navigation";
import { Providers } from "../_components/providers";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { routing } from "@/i18n/routing";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "vietnamese"] });

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
        className={`${spaceGrotesk.className} bg-bg dark:bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:69px_69px]`}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
