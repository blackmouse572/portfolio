import MouseContextProvider from '@components/Cursor/cursorContext';
import '@styles/globals.css';
import { Metadata } from 'next';
import { IBM_Plex_Sans, Oswald, Ubuntu_Mono } from 'next/font/google';
import React from 'react';
import { cn } from './libs/tw';

const ibm = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
  fallback: ['sans-serif'],
  subsets: ['latin-ext', 'vietnamese'],
  style: ['normal', 'italic'],
  variable: '--font-ibm',
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
  fallback: ['sans-serif'],
  subsets: ['latin-ext', 'vietnamese'],
  style: ['normal'],
  variable: '--font-oswald',
});

const ubuntu = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: {
    default: "Jaden Nguyen's Portfolio",
    template: "%s | Jaden Nguyen's Portfolio",
  },
  authors: [
    {
      name: 'Jaden Nguyen',
    },
  ],
  description: "Jaden Nguyen's Portfolio. I'm a full-stack developer, I love to build things and solve problems.",
  keywords: [
    'Jaden Nguyen',
    'Jaden',
    'Nguyen',
    'Portfolio',
    'Full-stack',
    'Developer',
    'Software Engineer',
    'Nextjs',
    'React',
    'Nodejs',
    'Node',
  ],
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="en" className={cn(ubuntu.variable, ibm.variable, oswald.variable)}>
      <MouseContextProvider>
        <body className="antialiased scroll-smooth bg-white-bg text-black">{children}</body>
      </MouseContextProvider>
    </html>
  );
}
