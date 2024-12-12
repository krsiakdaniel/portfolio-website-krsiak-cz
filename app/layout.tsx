import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import { TEXT } from '@/localization/texts_en'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// default data for pages with missing metadata
export const metadata: Metadata = {
  title: `${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Experienced React Developer from Brno Czech Republic. JavaScript, TypeScript, React, HTML, CSS, Sass, Tailwind CSS, Redux, GraphQL, Jest, Playwright, and Figma.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Brno',
    'Czech Republic',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Redux',
    'GraphQL',
    'Jest',
    'Playwright',
    'Figma',
  ],
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
      </body>
    </html>
  )
}
