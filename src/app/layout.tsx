import React from 'react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CBLOL Fantasy',
  description:
    'A fantasy game for CBLOL, brazilian league of legends championship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <h1 className="invisible absolute">CBLOL Fantasy</h1>
        <main className="h-screen flex justify-center items-center bg-slate-800 text-slate-100">
          {children}
        </main>
      </body>
    </html>
  );
}
