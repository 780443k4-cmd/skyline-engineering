'use client';

import { motion } from 'framer-motion';

export type Stage = { number: string; title: string; description: string };

export default function ProcessTimeline({ stages }: { stages: Stage[] }) {
  return (
    <div className="mt-14 relative">
      <div className="hidden md:block absolute left-0 right-0 top-[26px] h-px bg-line" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative"
          >
            <div className="relative z-10 w-3 h-3 rounded-full bg-skyline mb-5" />
            <div className="font-display text-xl text-skyline mb-1">{stage.number}</div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wide mb-2">
              {stage.title}
            </h3>
            <p className="text-sm text-graphite/70 leading-relaxed">
              {stage.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
