// src/app/[locale]/page.tsx
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Button from '@/components/ui/Button';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <p className="mb-8">{t('description')}</p>
      <Link href="/visualizer/python">
        <Button variant="primary">{t('start')}</Button>
      </Link>
    </main>
  );
}