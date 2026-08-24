import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Концепції вілл у Бенідормі',
  description: 'Архітектурні концепції вілл SKYLINE Engineering для Коста-Бланки та Бенідорма.',
  alternates: { canonical: '/villas' },
};

export default function VillasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
