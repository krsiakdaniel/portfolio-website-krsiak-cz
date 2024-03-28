import Footer from '@/components/Footer';
import Header from '@/components/header/Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Krsiak - React Developer',
  description:
    'Check out my React Developer portfolio. Discover a variety of projects and web applications demonstrating my skills in creating responsive and interactive user interfaces.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
