import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

import { metaDataShared } from '@/lib/utils/metadata/metaDataShared'
import { TEXT } from '@/localization/english'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// default metadata for pages
export const metadata: Metadata = {
  ...metaDataShared,
  manifest: '/manifest.webmanifest',
  creator: `${TEXT.nameDanielKrsiak}`,
  generator: 'Next.js',
  applicationName: 'React - Portfolio website',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ECF0F1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/png/icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/png/icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/png/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/png/icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/png/icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/png/icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/png/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/png/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/png/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/png/icon-192x192.png" />
      </Head>
      <body className={inter.className}>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
