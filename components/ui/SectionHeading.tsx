'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  align?: 'left' | 'center';
  /** Set true when this heading sits on a dark section background
   * (e.g. bg-ink), so eyebrow/title/text switch to light-on-dark colors
   * with sufficient contrast instead of the default light-background set. */
  dark?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`eyebrow mb-4 ${dark ? 'text-champagne' : ''}`}>{eyebrow}</div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] ${
          dark ? 'text-warmwhite' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>
      {text && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? 'text-warmwhite/70' : 'text-graphite/80'
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
