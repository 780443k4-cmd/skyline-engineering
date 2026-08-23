'use client';

import { isWhatsAppConfigured, whatsappHref } from '@/data/site';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function WhatsAppButton() {
  const { t } = useLanguage();
  // Only open a new tab for an actual wa.me link. When WhatsApp isn't
  // configured yet, the href falls back to the internal /contact page and
  // should navigate normally, not pop a blank external tab.
  const externalProps = isWhatsAppConfigured
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <>
      {/* Desktop floating button */}
      <a
        href={whatsappHref(t.common.waMessage)}
        {...externalProps}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-ink text-warmwhite px-5 py-3 text-xs tracking-widest2 uppercase hover:bg-skyline transition-colors"
      >
        {t.common.whatsapp}
      </a>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-warmwhite/95 backdrop-blur">
        <div className="grid grid-cols-2">
          <a
            href="/contact"
            className="text-center py-4 text-xs tracking-widest2 uppercase border-r border-line"
          >
            {t.common.start}
          </a>
          <a
            href={whatsappHref(t.common.waMessage)}
            {...externalProps}
            className="text-center py-4 text-xs tracking-widest2 uppercase bg-ink text-warmwhite"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
