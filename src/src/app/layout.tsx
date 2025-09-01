// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Advanced Code Visualizer',
  description: 'Secure multi-language code visualization tool',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ErrorBoundary>
              <Header />
              {children}
              <Footer />
            </ErrorBoundary>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}