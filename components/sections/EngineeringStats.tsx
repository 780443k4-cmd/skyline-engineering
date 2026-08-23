'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export default function EngineeringStats() {
  const { t } = useLanguage();
  const stats = [{ value: '25+', label: t.stats[0] }, { value: '3+', label: t.stats[1] }];
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 max-w-md">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-display text-5xl text-skyline">{s.value}</div>
          <p className="mt-2 text-sm text-graphite/70 leading-snug">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
