'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import FounderSection from '@/components/sections/FounderSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';

function Lines({text}:{text:string}) { const [a,b]=text.split('\n'); return <>{a}{b&&<><br/>{' '}{b}</>}</>; }
export default function AboutPage(){const {t,localizePath}=useLanguage();return <>
<section className="pt-20 md:pt-28 pb-16 border-b border-line"><div className="container-content"><div className="eyebrow mb-6">{t.about.eyebrow}</div><h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl"><Lines text={t.about.title}/></h1>
<div className="mt-8"><Link href={localizePath('/projects')} className="inline-block border border-ink px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors">{t.common.nav[1]}</Link></div>
</div></section>
<section className="py-24 md:py-32"><div className="container-content"><FounderSection/></div></section>
<section className="py-24 md:py-32 bg-white/50 border-y border-line"><div className="container-content"><SectionHeading eyebrow={t.about.why} title={t.about.reasonsTitle}/><FeatureGrid features={t.about.reasons} columns={4}/></div></section>
<CTASection title={<Lines text={t.about.cta}/>}/></>;
}
