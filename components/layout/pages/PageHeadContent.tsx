import PageHeadMetaTags from '@/components/layout/pages/PageHeadMetaTags'
import GoogleAnalytics from '@/components/layout/scripts/GoogleAnalytics'
import Smartlook from '@/components/layout/scripts/Smartlook'
import TawkToChat from '@/components/layout/scripts/TawkToChat'

const PageHeadContent = (): JSX.Element => {
  return (
    <head>
      <GoogleAnalytics />
      <Smartlook />
      <PageHeadMetaTags />
      <TawkToChat />
    </head>
  )
}

export default PageHeadContent
