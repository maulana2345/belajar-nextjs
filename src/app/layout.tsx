import type { Metadata } from 'next';
import '../styles/globals.css';
// import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POS Frontend',
  description: 'Point of Sale UI with Next.js 15',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 min-h-screen`}>{children}</body>
    </html>
  );
}