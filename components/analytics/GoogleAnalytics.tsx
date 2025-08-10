'use client'

import Script from 'next/script'

import { ANALYTICS_WARNING } from '@/localization/english'

const GoogleAnalytics = () => {
  if (!process.env['NEXT_PUBLIC_GA_MEASUREMENT_ID']) {
    console.warn(ANALYTICS_WARNING.googleAnalytics)
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GA_MEASUREMENT_ID']}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env['NEXT_PUBLIC_GA_MEASUREMENT_ID']}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
