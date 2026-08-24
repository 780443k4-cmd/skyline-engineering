import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Процес будівництва вілли',
  description: 'Процес SKYLINE Engineering: від ділянки та проєктування до дозволів, будівництва й передачі ключів.',
  alternates: { canonical: '/process' },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
