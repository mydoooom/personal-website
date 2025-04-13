import DarkModeSwitcher from '@/components/DarkModeSwitcher';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { NextIntlClientProvider, useMessages, useTranslations } from 'next-intl'


export default function Navigation () {
  const messages = useMessages();

  return (
    <nav className="container fixed !max-w-[100%] flex justify-end pt-7 gap-3">
      <LocaleSwitcher/>
      {/* This provider must be here and not in the Providers component, because it has to be in a server component */}
      <NextIntlClientProvider messages={messages}>
        <DarkModeSwitcher />
      </NextIntlClientProvider>
    </nav>
  );
}
