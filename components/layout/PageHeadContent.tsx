import GoogleAnalytics from '@/components/layout/scripts/GoogleAnalytics'
import Smartlook from '@/components/layout/scripts/Smartlook'
import TawkToChat from '@/components/layout/scripts/TawkToChat'

import { appleTouchIconSizes } from '@/lib/data/appleTouchIconSizes'

const MetaTags = () => {
  return (
    <>
      <meta name="theme-color" content="#ECF0F1" />
      {appleTouchIconSizes.map((size) => {
        return <link key={size} rel="apple-touch-icon" sizes={size} href={`/icons/png/icon-${size}.png`} />
      })}
    </>
  )
}

const PageHeadContent = () => {
  return (
    <head>
      <GoogleAnalytics />
      <Smartlook />
      <MetaTags />
      <TawkToChat />
    </head>
  )
}

export default PageHeadContent
