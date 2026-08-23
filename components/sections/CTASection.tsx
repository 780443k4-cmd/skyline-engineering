'use client';

import Link from 'next/link';
import { isWhatsAppConfigured, whatsappHref } from '@/data/site';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function CTASection({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
}) {
  const { t } = useLanguage();
  return (
    <section id="contact-cta" className="bg-ink text-warmwhite">
      <div className="container-content py-24 md:py-32 text-center">
        <div className="eyebrow text-champagne mb-6">{eyebrow || t.common.ctaEyebrow}</div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
          {title}
        </h2>
        {text && (
          <p className="mt-6 text-warmwhite/70 max-w-xl mx-auto text-base md:text-lg">
            {text}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="border border-warmwhite px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-warmwhite hover:text-ink transition-colors"
          >
            {t.common.ctaButton}
          </Link>
          <a
            href={whatsappHref(t.common.waMessage)}
            {...(isWhatsAppConfigured
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="px-8 py-4 text-xs tracking-widest2 uppercase bg-skyline hover:bg-skyline-light transition-colors"
          >
            {t.common.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
