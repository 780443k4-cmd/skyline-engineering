import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про SKYLINE Engineering',
  description: 'Команда та інженерний підхід SKYLINE Engineering до проєктування і будівництва вілл.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
