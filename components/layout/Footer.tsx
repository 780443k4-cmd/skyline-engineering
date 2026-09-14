'use client';

import Link from 'next/link';
import ContactChannels from '@/components/ui/ContactChannels';
import { site } from '@/data/site';
import { locationPaths, type LocationKey } from '@/data/seo';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const locationOrder: LocationKey[] = ['finestrat', 'benidorm', 'costaBlanca'];

export default function Footer() {
  const { localizePath, t } = useLanguage();
  const nav = site.nav.map((item, index) => ({ ...item, label: t.common.nav[index] }));
  const areas = locationOrder.map((key, i) => ({
    href: locationPaths[key],
    label: t.home.locationsItems[i].name,
  }));
  return (
    <footer className="border-t border-line bg-warmwhite">
      <div className="container-content py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <div className="font-display text-xl mb-3">{site.name}</div>
          <p className="text-sm text-graphite/80 max-w-xs">{t.common.tagline}</p>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.common.navigation}</div>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={localizePath(item.href)} className="hover:text-skyline transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.common.serviceAreas}</div>
          <ul className="space-y-2 text-sm">
            {areas.map((area) => (
              <li key={area.href}>
                <Link href={localizePath(area.href)} className="hover:text-skyline transition-colors">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.common.contact}</div>
          <ContactChannels compact />
          <div className="mt-3 text-sm text-graphite/70">{t.common.region}</div>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.common.legal}</div>
          <ul className="space-y-2 text-sm text-graphite/70">
            <li>
              <Link href={localizePath('/privacy-policy')} className="hover:text-skyline transition-colors">
                {t.common.privacy}
              </Link>
            </li>
            <li>
              <Link href={localizePath('/cookie-policy')} className="hover:text-skyline transition-colors">
                {t.common.cookies}
              </Link>
            </li>
            <li>
              <Link href={localizePath('/legal-notice')} className="hover:text-skyline transition-colors">
                {t.common.notice}
              </Link>
            </li>
          </ul>
          <div className="eyebrow mt-7 mb-3">{t.common.follow}</div>
          <ul className="space-y-2 text-sm">
            {site.social.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-skyline transition-colors"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-content py-6 text-xs text-graphite/60 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {site.legal.companyName}. {t.common.rights}
          </span>
          <span>{t.common.region}</span>
        </div>
      </div>
    </footer>
  );
}
