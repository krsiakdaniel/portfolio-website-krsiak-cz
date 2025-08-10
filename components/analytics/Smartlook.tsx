'use client'

import Script from 'next/script'

import { ANALYTICS_WARNING } from '@/localization/english'

const Smartlook = () => {
  if (!process.env['NEXT_PUBLIC_SMARTLOOK_ID']) {
    console.warn(ANALYTICS_WARNING.smartlook)
    return null
  }

  return (
    <Script id="smartlook" strategy="afterInteractive">
      {`
        window.smartlook||(function(d) {
          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '${process.env['NEXT_PUBLIC_SMARTLOOK_ID']}', { region: 'eu' });
      `}
    </Script>
  )
}

export default Smartlook
