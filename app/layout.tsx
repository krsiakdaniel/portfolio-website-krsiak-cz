import { Inter } from 'next/font/google'
import { FC, ReactNode } from 'react'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import PageHeadContent from '@/components/layout/PageHeadContent'

import { defaultMetaData } from '@/lib/data/metadata/shared/defaultMetaData'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Default metadata used by all pages if they don't have their own metadata
export const metadata = {
  ...defaultMetaData,
}

type RootLayoutProps = {
  children: ReactNode
}

// 'Readonly' make the properties of the object read-only, meaning that after the initial assignment they cannot be reassigned.
const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <PageHeadContent />
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
