import PageHeadMetaTags from '@/components/layout/PageHeadMetaTags'
import GoogleAnalytics from '@/components/layout/scripts/GoogleAnalytics'
import Smartlook from '@/components/layout/scripts/Smartlook'

const PageHeadContent = (): JSX.Element => {
  return (
    <head>
      <GoogleAnalytics />
      <Smartlook />
      <PageHeadMetaTags />
    </head>
  )
}

export default PageHeadContent
