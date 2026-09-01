'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';

function Lines({ text }: { text: string }) {
  const [first, second] = text.split('\n');
  return (
    <>
      {first}
      {second && (
        <>
          <br />
          {' '}
          {second}
        </>
      )}
    </>
  );
}

export default function FaqPage() {
  const { t } = useLanguage();
  const items: { q: string; a: string }[] = t.faqPage.items;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-20 md:pt-28 pb-16 border-b border-line">
        <div className="container-content">
          <div className="eyebrow mb-6">{t.faqPage.eyebrow}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            <Lines text={t.faqPage.title} />
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-graphite/80">
            {t.faqPage.intro}
          </p>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="container-content max-w-3xl">
          <div className="divide-y divide-line">
            {items.map((item) => (
              <div key={item.q} className="py-8">
                <h2 className="font-sans font-semibold text-base md:text-lg leading-snug mb-3">
                  {item.q}
                </h2>
                <p className="text-sm md:text-base text-graphite/70 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 border-t border-line bg-ink text-warmwhite text-center">
        <div className="container-content">
          <h2 className="font-display text-3xl md:text-5xl">
            <Lines text={t.faqPage.cta} />
          </h2>
        </div>
      </section>
      <CTASection title={<Lines text={t.contactPage.title} />} text={t.contactPage.text} />
    </>
  );
}
