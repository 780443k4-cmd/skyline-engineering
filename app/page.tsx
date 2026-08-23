'use client';

import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PriceCards from '@/components/sections/PriceCards';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ResponsibilityChain from '@/components/sections/ResponsibilityChain';
import VillaGrid from '@/components/sections/VillaGrid';
import EngineeringStats from '@/components/sections/EngineeringStats';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';

function Lines({ text }: { text: string }) {
  const [first, second] = text.split('\n');
  return <>{first}{second && <><br />{' '}{second}</>}</>;
}

export default function HomePage() {
  const { t } = useLanguage();
  const stages = t.process.map((stage: string[], index: number) => ({number:String(index + 1).padStart(2,'0'),title:stage[0],description:stage[1]}));
  return <>
    <Hero />
    <section className="py-24 md:py-32"><div className="container-content">
      <SectionHeading eyebrow={t.home.helpEyebrow} title={<Lines text={t.home.helpTitle} />} text={t.home.helpText} />
      <FeatureGrid features={t.home.plans} />
      <div className="mt-12"><Link href="/contact" className="inline-block border border-ink px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors">{t.home.talk}</Link></div>
    </div></section>
    <section className="py-24 md:py-32 bg-white/50 border-y border-line"><div className="container-content">
      <SectionHeading eyebrow={t.home.investment} title={t.home.priceTitle} />
      <PriceCards />
      <p className="mt-8 text-sm text-graphite/60 max-w-xl">{t.home.priceNote}</p>
      <div className="mt-8"><Link href="/contact" className="inline-block bg-skyline text-warmwhite px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-skyline-light transition-colors">{t.home.estimate}</Link></div>
    </div></section>
    <section className="py-24 md:py-32"><div className="container-content"><SectionHeading eyebrow={t.home.process} title={<Lines text={t.home.processTitle} />} /><ProcessTimeline stages={stages} /></div></section>
    <section className="py-24 md:py-32 bg-ink text-warmwhite"><div className="container-content"><SectionHeading eyebrow={t.home.one} title={<Lines text={t.home.oneTitle} />} text={t.home.oneText} align="center" dark /><ResponsibilityChain /></div></section>
    <section className="py-24 md:py-32"><div className="container-content"><SectionHeading eyebrow={t.home.collection} title={t.home.collectionTitle} text={t.home.collectionText} /><VillaGrid /></div></section>
    <section className="py-24 md:py-32 border-t border-line"><div className="container-content grid grid-cols-1 md:grid-cols-2 gap-12 items-start"><SectionHeading eyebrow={t.home.why} title={<Lines text={t.home.whyTitle} />} text={t.home.whyText} /><EngineeringStats /></div></section>
    <CTASection title={<Lines text={t.home.finalTitle} />} text={t.home.finalText} />
  </>;
}
