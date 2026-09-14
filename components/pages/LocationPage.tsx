'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import LocationLinks from '@/components/sections/LocationLinks';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { site } from '@/data/site';
import { locationPaths, type LocationKey } from '@/data/seo';

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

const areaServedName: Record<LocationKey, string> = {
  finestrat: 'Finestrat',
  benidorm: 'Benidorm',
  costaBlanca: 'Costa Blanca',
};

type LocationContent = {
  eyebrow: string;
  title: string;
  intro: string;
  bodyTitle: string;
  bodyText: string;
  faqEyebrow: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  cta: string;
  ctaText: string;
  crossLinksTitle: string;
};

export function LocationPage({ location }: { location: LocationKey }) {
  const { t } = useLanguage();
  const content: LocationContent = t.locationPages[location];
  const organizationId = `${site.url}#organization`;
  const pageUrl = `${site.url}${locationPaths[location]}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Turnkey villa construction — ${areaServedName[location]}`,
        serviceType: 'Turnkey villa construction',
        provider: { '@id': organizationId },
        areaServed: { '@type': location === 'costaBlanca' ? 'AdministrativeArea' : 'City', name: areaServedName[location] },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: site.shortName, item: site.url },
          { '@type': 'ListItem', position: 2, name: content.eyebrow, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-20 md:pt-28 pb-16 border-b border-line">
        <div className="container-content">
          <div className="eyebrow mb-6">{content.eyebrow}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            <Lines text={content.title} />
          </h1>
          <p className="mt-6 text-graphite/75 text-lg max-w-2xl">{content.intro}</p>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="container-content max-w-3xl">
          <SectionHeading title={content.bodyTitle} text={content.bodyText} />
        </div>
      </section>
      <section className="py-24 md:py-32 bg-white/50 border-y border-line">
        <div className="container-content max-w-3xl">
          <div className="eyebrow mb-4">{content.faqEyebrow}</div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-10">
            <Lines text={content.faqTitle} />
          </h2>
          <div className="divide-y divide-line">
            {content.faq.map((item) => (
              <div key={item.q} className="py-8">
                <h3 className="font-sans font-semibold text-base md:text-lg leading-snug mb-3">
                  {item.q}
                </h3>
                <p className="text-sm md:text-base text-graphite/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 border-b border-line">
        <div className="container-content">
          <div className="eyebrow mb-5">{content.crossLinksTitle}</div>
          <LocationLinks exclude={location} variant="compact" />
        </div>
      </section>
      <CTASection title={<Lines text={content.cta} />} text={content.ctaText} />
    </>
  );
}

export function FinestratPage() {
  return <LocationPage location="finestrat" />;
}

export function BenidormPage() {
  return <LocationPage location="benidorm" />;
}

export function CostaBlancaPage() {
  return <LocationPage location="costaBlanca" />;
}
