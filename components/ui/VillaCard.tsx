'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { VillaConcept } from '@/data/villas';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function VillaCard({
  villa,
  features,
}: {
  villa: VillaConcept;
  features?: string[];
}) {
  const { t, localizePath } = useLanguage();
  return (
    <Link href={localizePath(`/villas/${villa.slug}`)} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-line">
        <Image
          src={villa.image}
          alt={`${villa.name} — ${t.common.concept.toLowerCase()}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="villa-image object-cover transition-transform duration-200 ease-out"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-warmwhite/90 text-ink text-[10px] tracking-widest2 uppercase px-2 py-1">
          {t.common.concept}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-2xl">{villa.name}</h3>
        <p className="text-sm text-graphite/70 mt-1">
          {villa.bedrooms} · {villa.size}
        </p>
        <p className="text-sm font-semibold mt-1">{villa.priceFrom}</p>
        {features && features.length > 0 && (
          <ul className="mt-3 space-y-1 text-xs text-graphite/60">
            {features.map((feat) => (
              <li key={feat}>{feat}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
