'use client';

import { villaConcepts } from '@/data/villas';
import VillaCard from '@/components/ui/VillaCard';
import { useLanguage } from '@/components/i18n/LanguageProvider';

type PriceTier = { name: string; price: string; features: string[] };

export default function VillaGrid() {
  const { t } = useLanguage();
  const prices = t.prices as PriceTier[];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
        {villaConcepts.map((villa, index) => {
          const [name, bedrooms, priceFrom, size, description] = t.villas[index] as string[];
          return (
            <VillaCard
              key={villa.slug}
              villa={{ ...villa, name, bedrooms, priceFrom, size, description }}
              features={prices[index]?.features}
            />
          );
        })}
      </div>
    </div>
  );
}
