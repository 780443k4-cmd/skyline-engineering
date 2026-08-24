import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обговорити проєкт',
  description: 'Зв’яжіться з SKYLINE Engineering, щоб обговорити ділянку, проєкт або ідею вілли в Іспанії.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
