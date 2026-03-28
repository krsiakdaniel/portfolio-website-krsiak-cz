'use client'

import Script from 'next/script'

import { ANALYTICS_WARNING } from '@/localization'

const Hotjar = () => {
  // Don't load Hotjar in development
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  if (!process.env['NEXT_PUBLIC_HOTJAR_ID'] || !process.env['NEXT_PUBLIC_HOTJAR_VERSION']) {
    console.warn(ANALYTICS_WARNING.hotjar)
    return null
  }

  return (
    <Script id="hotjar" strategy="afterInteractive">
      {`
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${process.env['NEXT_PUBLIC_HOTJAR_ID']},hjsv:${process.env['NEXT_PUBLIC_HOTJAR_VERSION']}};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
  )
}

export default Hotjar
