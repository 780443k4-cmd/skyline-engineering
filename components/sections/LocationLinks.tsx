'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { locationPaths, type LocationKey } from '@/data/seo';

const order: LocationKey[] = ['finestrat', 'benidorm', 'costaBlanca'];

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

/**
 * Internal-linking cross-links between the three location landing pages
 * (Finestrat / Benidorm / Costa Blanca). Pass `exclude` on a location page
 * itself so it doesn't link to itself, and `variant="compact"` to render it
 * as a plain link row instead of the full homepage section.
 */
export default function LocationLinks({
  exclude,
  variant = 'section',
}: {
  exclude?: LocationKey;
  variant?: 'section' | 'compact';
}) {
  const { localizePath, t } = useLanguage();
  const items = order
    .filter((key) => key !== exclude)
    .map((key, i) => ({ key, href: locationPaths[key], ...t.home.locationsItems[order.indexOf(key)] }));

  if (variant === 'compact') {
    return (
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        {items.map((item) => (
          <li key={item.key}>
            <Link href={localizePath(item.href)} className="text-sm underline hover:text-skyline transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="container-content">
        <div className="max-w-2xl">
          <div className="eyebrow mb-4">{t.home.locationsEyebrow}</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
            <Lines text={t.home.locationsTitle} />
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-graphite/80">
            {t.home.locationsText}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line mt-12">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              className="motion-surface bg-warmwhite p-8"
              initial={{ opacity: 0, transform: 'translateY(16px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="font-display text-2xl mb-3">{item.name}</h3>
              <p className="text-sm text-graphite/70 leading-relaxed mb-5">{item.text}</p>
              <Link
                href={localizePath(item.href)}
                className="text-xs tracking-widest2 uppercase border-b border-ink pb-1 hover:text-skyline hover:border-skyline transition-colors"
              >
                {t.common.start}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
