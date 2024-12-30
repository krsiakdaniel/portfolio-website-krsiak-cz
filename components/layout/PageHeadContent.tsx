import Smartlook from '@/components/layout/tracking-scripts/Smartlook'

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
      <MetaTags />
      <Smartlook />
    </head>
  )
}

export default PageHeadContent
