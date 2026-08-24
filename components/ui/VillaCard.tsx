'use client';

import Image from 'next/image';
import type { VillaConcept } from '@/data/villas';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function VillaCard({ villa }: { villa: VillaConcept }) {
  const { t } = useLanguage();
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-line">
        <Image
          src={villa.image}
          alt={`${villa.name} — ${t.common.concept.toLowerCase()}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="villa-image object-cover transition-transform duration-200 ease-out"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-2xl">{villa.name}</h3>
        <p className="text-sm text-graphite/70 mt-1">
          {villa.bedrooms} · {villa.size}
        </p>
        <p className="text-sm font-semibold mt-1">{villa.priceFrom}</p>
      </div>
    </div>
  );
}
