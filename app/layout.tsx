import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNav from './ui/nav/top-nav';
import SideNav from './ui/nav/side-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | PicoSBS',
    default: 'PicoSBS',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <div className='lg:flex h-screen bg-slate-300 items-start  w-full overflow-hidden'>
          <SideNav />
          <div className='flex-1 h-full overflow-y-auto'>
            <TopNav />
            {/* TODO: to add custom scrollbar */}
            <main className='relative mx-4 md:mx-auto min-h-full  max-w-7xl overflow-y-auto px-3 py-6 md:p-12'>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
