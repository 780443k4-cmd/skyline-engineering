'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function ResponsibilityChain() {
  const { t } = useLanguage();
  return (
    <div className="mt-14 flex flex-col items-center">
      {t.chain.map((step: string, i: number) => (
          <motion.div key={step} className="motion-surface flex flex-col items-center">
          <motion.div
              initial={{ opacity: 0, transform: 'translateY(12px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            className={`font-display text-2xl md:text-3xl px-8 py-3 border ${
              i === t.chain.length - 1
                ? 'border-skyline text-skyline'
                : 'border-warmwhite/25 text-warmwhite'
            }`}
          >
            {step}
          </motion.div>
          {i < t.chain.length - 1 && (
            <div className="h-8 w-px bg-line my-1" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
