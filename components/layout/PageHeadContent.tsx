import { FC } from 'react'

import AppleTouchIcons from '@/components/layout/AppleTouchIcons'
import GoogleAnalytics from '@/components/layout/scripts/GoogleAnalytics'
import Smartlook from '@/components/layout/scripts/Smartlook'

const PageHeadContent: FC = (): JSX.Element => {
  return (
    <head>
      <AppleTouchIcons />
      <GoogleAnalytics />
      <Smartlook />
    </head>
  )
}

export default PageHeadContent
