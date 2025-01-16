import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import { FC } from 'react'

import AppleTouchIcons from '@/components/layout/AppleTouchIcons'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import GoogleAnalytics from '@/components/layout/scripts/GoogleAnalytics'
import Smartlook from '@/components/layout/scripts/Smartlook'

import { defaultMetaData } from '@/lib/data/metadata/shared/defaultMetaData'

import { RootLayoutProps } from '@/lib/utils/typeDefinitions/props'

import './globals.css'

// Load the Inter font with the latin subset
const inter = Inter({ subsets: ['latin'] })

// Default metadata used by all pages if they don't have their own metadata
export const metadata = {
  ...defaultMetaData,
}
// Viewport settings for the entire application
export const viewport: Viewport = {
  themeColor: '#ECF0F1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

// 'Readonly' make the properties of the object read-only, meaning that after the initial assignment they cannot be reassigned.
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <AppleTouchIcons />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
        <Smartlook />
      </body>
    </html>
  )
}

export default RootLayout
