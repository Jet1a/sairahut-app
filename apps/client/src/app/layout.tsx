import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Moul } from 'next/font/google';
const mitr = Moul({
  subsets: ['latin'],
  weight: ['400'],
});

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "IT30 Code of Under World's Treasure",
  description: "Code of Under World's Treasure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
