'use client';

import { motion } from 'framer-motion';

export type Feature = { title: string; text: string };

export default function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 3 | 4;
}) {
  const colClass = columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-px bg-line mt-14`}>
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-warmwhite p-8 md:p-10"
        >
          <h3 className="font-display text-2xl mb-3">{f.title}</h3>
          <p className="text-graphite/75 text-sm leading-relaxed">{f.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
