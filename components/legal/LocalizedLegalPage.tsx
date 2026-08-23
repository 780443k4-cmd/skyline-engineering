'use client';

import { LegalPage, LegalSection } from './LegalPage';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { legalTranslations } from '@/data/legalTranslations';
import { site } from '@/data/site';

export default function LocalizedLegalPage({ kind }: { kind: 'privacy' | 'cookies' | 'notice' }) {
  const { locale } = useLanguage();
  const copy = legalTranslations[locale];
  const page = copy[kind];
  return <LegalPage eyebrow={page.eyebrow} title={page.title} updated={copy.updated}>
    {page.sections.map((section: string[]) => <LegalSection key={section[0]} title={section[0]}><p>{section[1]}</p></LegalSection>)}
    <LegalSection title={locale === 'es' ? 'Contacto' : locale === 'uk' ? 'Контакти' : locale === 'ru' ? 'Контакты' : 'Contact'}>
      <p><a className="underline" href={`mailto:${site.email}`}>{site.email}</a> · <a className="underline" href={`tel:+${site.phoneNumber}`}>{site.phoneDisplay}</a></p>
    </LegalSection>
  </LegalPage>;
}
