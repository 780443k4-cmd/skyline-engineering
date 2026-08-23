'use client';

import { villaConcepts } from '@/data/villas';
import VillaCard from '@/components/ui/VillaCard';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function VillaGrid() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {villaConcepts.map((villa, index) => (
          <VillaCard key={villa.slug} villa={{...villa, name:t.villas[index][0], bedrooms:t.villas[index][1], priceFrom:t.villas[index][2], size:t.villas[index][3]}} />
        ))}
      </div>
    </div>
  );
}
