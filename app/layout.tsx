import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

import { appleTouchIconSizes } from '@/lib/data/appleTouchIconSizes'

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

type RootLayoutProps = {
  children: ReactNode
}

// 'Readonly' make the properties of the object read-only, meaning that after the initial assignment they cannot be reassigned.
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ECF0F1" />
        {appleTouchIconSizes.map((size) => {
          return <link key={size} rel="apple-touch-icon" sizes={size} href={`/icons/png/icon-${size}.png`} />
        })}
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

export default RootLayout
