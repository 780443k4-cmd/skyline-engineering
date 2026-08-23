'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function PriceCards() {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
      {t.prices.map((tier: {name:string;price:string;features:string[]}, i:number) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="border border-line p-8 flex flex-col"
        >
          <div className="eyebrow mb-3">{tier.name}</div>
          <div className="font-display text-3xl mb-6">{tier.price}</div>
          <ul className="space-y-2 text-sm text-graphite/80 flex-1">
            {tier.features.map((feat) => (
              <li
                key={feat}
                className="border-t border-line pt-2 first:border-t-0 first:pt-0"
              >
                {feat}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
