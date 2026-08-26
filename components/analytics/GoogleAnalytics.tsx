'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const measurementId = 'G-2HD8CH1936';
const storageKey = 'skyline-analytics-consent';

const copy = {
  uk: { text: 'Ми використовуємо Google Analytics лише за вашою згодою, щоб розуміти відвідуваність і покращувати сайт.', accept: 'Прийняти', reject: 'Відхилити', policy: 'Політика cookie' },
  ru: { text: 'Мы используем Google Analytics только с вашего согласия, чтобы понимать посещаемость и улучшать сайт.', accept: 'Принять', reject: 'Отклонить', policy: 'Политика cookie' },
  en: { text: 'We use Google Analytics only with your consent to understand traffic and improve the website.', accept: 'Accept', reject: 'Reject', policy: 'Cookie policy' },
  es: { text: 'Usamos Google Analytics solo con tu consentimiento para conocer el tráfico y mejorar el sitio web.', accept: 'Aceptar', reject: 'Rechazar', policy: 'Política de cookies' },
};

type Consent = 'accepted' | 'rejected' | null;

export default function GoogleAnalytics() {
  const { locale, localizePath } = useLanguage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState<Consent>(null);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    setConsent(saved === 'accepted' || saved === 'rejected' ? saved : null);
    setResolved(true);
  }, []);

  useEffect(() => {
    if (consent !== 'accepted' || !window.gtag) return;
    const query = searchParams.toString();
    window.gtag('event', 'page_view', {
      page_path: `${pathname}${query ? `?${query}` : ''}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [consent, pathname, searchParams]);

  const choose = (next: Exclude<Consent, null>) => {
    window.localStorage.setItem(storageKey, next);
    setConsent(next);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="skyline-ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:false,anonymize_ip:true});`}
          </Script>
        </>
      )}
      {resolved && consent === null && (
        <aside className="fixed inset-x-4 bottom-20 z-[70] mx-auto max-w-3xl border border-line bg-warmwhite p-5 shadow-xl md:bottom-6 md:flex md:items-center md:gap-6" aria-label="Cookie consent">
          <p className="text-sm leading-relaxed text-graphite/80 md:flex-1">
            {copy[locale].text}{' '}
            <a href={localizePath('/cookie-policy')} className="underline underline-offset-4">{copy[locale].policy}</a>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 md:mt-0 md:w-64">
            <button type="button" onClick={() => choose('rejected')} className="border border-ink px-4 py-3 text-xs uppercase tracking-widest2">{copy[locale].reject}</button>
            <button type="button" onClick={() => choose('accepted')} className="bg-ink px-4 py-3 text-xs uppercase tracking-widest2 text-warmwhite">{copy[locale].accept}</button>
          </div>
        </aside>
      )}
    </>
  );
}
