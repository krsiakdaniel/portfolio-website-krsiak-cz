import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import RegisterServiceWorker from '@/components/RegisterServiceWorker'

import { metaDataShared } from '@/lib/utils/metadata/metaDataShared'
import { TEXT } from '@/localization/english'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// default metadata for pages
export const metadata: Metadata = {
  ...metaDataShared,
  creator: `${TEXT.nameDanielKrsiak}`,
  generator: 'Next.js',
  applicationName: 'React - Portfolio website',
  referrer: 'origin-when-cross-origin',
  themeColor: '#7C3AED',
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
  RegisterServiceWorker()

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
