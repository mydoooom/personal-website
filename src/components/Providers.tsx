import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
        <ThemeProvider attribute='class' enableSystem>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
    </>
  )
}