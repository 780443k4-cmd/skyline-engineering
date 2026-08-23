'use client';
import ContactForm from '@/components/sections/ContactForm';
import ContactChannels from '@/components/ui/ContactChannels';
import { useLanguage } from '@/components/i18n/LanguageProvider';
function Lines({text}:{text:string}){const[a,b]=text.split('\n');return <>{a}{b&&<><br/>{' '}{b}</>}</>}
export default function ContactPage(){const{t}=useLanguage();return <section className="pt-20 md:pt-28 pb-24 md:pb-32"><div className="container-content grid grid-cols-1 lg:grid-cols-2 gap-16"><div><div className="eyebrow mb-6">{t.contactPage.eyebrow}</div><h1 className="font-display text-5xl md:text-6xl leading-[1.02] mb-6"><Lines text={t.contactPage.title}/></h1><p className="text-graphite/75 text-lg max-w-md mb-10">{t.contactPage.text}</p><div className="space-y-5"><ContactChannels/><div><span className="text-graphite/50 mr-3 text-sm">{t.common.location}</span>{t.common.region}</div></div></div><div><ContactForm/></div></div></section>}
