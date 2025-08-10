import type { Viewport } from 'next'

// Layout
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

// Apple Touch Icons
import AppleTouchIcons from '@/components/layout/AppleTouchIcons'

// Analytics
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

// Default metadata used by all pages if they don't have their own metadata
import { defaultMetaData } from '@/lib/data/metadata/shared/defaultMetaData'

// Root layout props
import { RootLayoutProps } from '@/lib/utils/typeDefinitions/props/app'

// Constants
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { ARIA_LABELS } from '@/localization/english'

// Importing the Roboto font configuration
import { roboto } from './fonts'

// Importing CSS for react-tooltip
import 'react-tooltip/dist/react-tooltip.css'

// Importing global CSS styles
import './globals.css'

// Default metadata used by all pages if they don't have their own metadata
export const metadata = {
  ...defaultMetaData,
}
// Viewport settings for the entire application
export const viewport: Viewport = {
  themeColor: '#ECF0F1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// 'Readonly' make the properties of the object read-only, meaning that after the initial assignment they cannot be reassigned.
const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <GoogleAnalytics />
        <AppleTouchIcons />
      </head>
      <body className={roboto.className}>
        <Header />
        <main id={ID.main} aria-label={ARIA_LABELS.mainContent}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
