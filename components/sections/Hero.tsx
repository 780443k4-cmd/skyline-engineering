'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/data/site';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
  const { localizePath, t } = useLanguage();
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/hero/villa-hero.jpg"
        alt={t.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

      <div className="relative z-10 h-full container-content flex flex-col justify-end pb-20 md:pb-28">
        <motion.div
          className="motion-surface"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="eyebrow text-champagne mb-6">{t.common.region}</div>
          <h1 className="font-display text-warmwhite text-6xl md:text-8xl leading-[0.95] tracking-tight">
            {t.hero.title1}
            <br />
            {' '}{t.hero.title2}
          </h1>
          <p className="mt-6 text-warmwhite/85 text-lg md:text-xl max-w-lg">
            {t.hero.intro}
          </p>
          <p className="mt-4 text-warmwhite/70 text-sm md:text-base">
            {t.hero.subtitle}
          </p>
          <p className="mt-2 text-warmwhite/60 text-sm tracking-wide">
            {t.hero.services}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={localizePath('/contact')}
              onClick={() => trackEvent('cta_click', { location: 'hero', destination: 'contact' })}
              className="bg-skyline hover:bg-skyline-light transition-colors text-warmwhite px-8 py-4 text-xs tracking-widest2 uppercase text-center"
            >
              {t.hero.discuss}
            </Link>
            <Link
              href={localizePath('/projects')}
              onClick={() => trackEvent('cta_click', { location: 'hero', destination: 'projects' })}
              className="border border-warmwhite/70 text-warmwhite px-8 py-4 text-xs tracking-widest2 uppercase text-center hover:bg-warmwhite hover:text-ink transition-colors"
            >
              {t.hero.explore}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
