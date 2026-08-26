'use client';

import { createContext, useContext, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { dictionaries, type Locale } from '@/data/translations';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  localizePath: (path: string) => string;
  t: (typeof dictionaries)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const languages: { code: Locale; short: string; label: string }[] = [
  { code: 'uk', short: 'UA', label: 'Українська' },
  { code: 'ru', short: 'RU', label: 'Русский' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'es', short: 'ES', label: 'Español' },
];

export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: Locale }) {
  const locale = initialLocale;
  const pathname = usePathname();
  const router = useRouter();

  const localizePath = (path: string) => path === '/' ? `/${locale}` : `/${locale}${path}`;

  const setLocale = (next: Locale) => {
    window.localStorage.setItem('skyline-language', next);
    const rest = pathname.replace(/^\/(uk|ru|en|es)(?=\/|$)/, '') || '/';
    router.push(rest === '/' ? `/${next}` : `/${next}${rest}`);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, localizePath, t: dictionaries[locale] }),
    [locale, pathname]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider');
  return value;
}
