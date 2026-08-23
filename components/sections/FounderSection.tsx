'use client';

import Image from 'next/image';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function FounderSection() {
  const { t } = useLanguage();
  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className="relative aspect-[4/5] bg-line">
        <Image
          src="/images/team/denys-druz.jpg"
          alt={t.founder.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <div className="eyebrow mb-4">{t.founder.eyebrow}</div>
        <h3 className="font-display text-3xl md:text-4xl mb-2">{t.founder.name}</h3>
        <p className="text-sm text-graphite/60 mb-6">{t.founder.role}</p>
        <div className="space-y-4 text-graphite/80 text-base leading-relaxed">
          {t.founder.paragraphs.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
