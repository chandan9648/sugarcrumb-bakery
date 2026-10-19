
import type { Metadata } from 'next';
import './globals.css';
import 'lenis/dist/lenis.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Sugar & Crumb | Freshly baked, always heartfelt',
  description:
    'Order fresh cakes, pastries, cookies and celebration bakes from your neighbourhood bakery. Made in small batches, delivered with care.',
  keywords: [
    'bakery near me',
    'birthday cake delivery',
    'fresh cakes',
    'custom cakes',
    'pastries',
    'cookies',
    'bakery delivery',
  ],
  openGraph: {
    title: 'Sugar & Crumb — A little sweetness, made daily',
    description:
      'Freshly baked favourites for everyday moments and big celebrations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
