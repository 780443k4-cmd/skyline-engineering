'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="eyebrow mb-6">404</div>
      <h1 className="font-display text-5xl md:text-6xl mb-6">{t.common.pageMissing}</h1>
      <p className="text-graphite/70 mb-10 max-w-md">
        {t.common.pageMissingText}
      </p>
      <Link
        href="/"
        className="border border-ink px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors"
      >
        {t.common.backHome}
      </Link>
    </div>
  );
}
