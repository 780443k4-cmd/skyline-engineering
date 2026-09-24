'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { villaConcepts } from '@/data/villas';
import { site } from '@/data/site';

export default function VillaDetailPage({ slug }: { slug: string }) {
  const { t, locale, localizePath } = useLanguage();
  const index = villaConcepts.findIndex((item) => item.slug === slug);
  const villa = villaConcepts[index];

  if (!villa) {
    notFound();
  }

  // Positional tuple from data/translations.ts: [name, bedrooms, priceFrom, size, description].
  // Index 4 (the extended description) is only present here — the card grid only needs 0-3.
  const [name, bedrooms, priceFrom, size, description] = t.villas[index] as string[];
  const organizationId = `${site.url}#organization`;
  const pageUrl = `${site.url}${localizePath(`/villas/${slug}`)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${name} — turnkey villa construction concept`,
        serviceType: 'Turnkey villa construction',
        provider: { '@id': organizationId },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: site.shortName, item: site.url },
          { '@type': 'ListItem', position: 2, name: t.villasPage.eyebrow, item: `${site.url}${localizePath('/villas')}` },
          { '@type': 'ListItem', position: 3, name, item: pageUrl },
        ],
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
          <Link
            href={localizePath('/villas')}
            className="text-sm underline hover:text-skyline transition-colors"
          >
            {t.villasPage.eyebrow}
          </Link>
          <div className="eyebrow mt-6 mb-4">{villa.tier}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            {name}
          </h1>
          <p className="mt-6 text-graphite/75 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-line">
          <Image
            src={villa.image}
            alt={`${name} — ${t.common.concept.toLowerCase()}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <span className="absolute top-4 left-4 bg-warmwhite/90 text-ink text-[10px] tracking-widest2 uppercase px-3 py-1.5">
            {t.common.concept}
          </span>
        </div>
      </section>

      <section className="py-16 border-b border-line">
        <div className="container-content flex flex-wrap gap-x-10 gap-y-4 text-lg font-display">
          <span>{bedrooms}</span>
          <span className="text-graphite/40">·</span>
          <span>{size}</span>
          <span className="text-graphite/40">·</span>
          <span className="font-semibold">{priceFrom}</span>
        </div>
      </section>

      {/* Floor plan: intentionally omitted for now — no plan files exist yet for
          these concepts. Add a section here (image + room breakdown) once real
          or clearly-labelled schematic plans are provided; do not fabricate one. */}

      <section className="py-16 border-b border-line bg-white/50">
        <div className="container-content max-w-2xl">
          <p className="text-sm text-graphite/60 leading-relaxed">{t.villasPage.examplesText}</p>
        </div>
      </section>

      <CTASection
        title={t.villasPage.cta.split('\n').join(' ')}
        text={t.villasPage.ctaText}
      />
    </>
  );
}
