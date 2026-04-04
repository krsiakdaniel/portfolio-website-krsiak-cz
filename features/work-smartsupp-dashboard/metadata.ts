import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import smartsuppDashboardOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-og.png'
import smartsuppDashboardTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-twitter.png'

import { META_SMARTSUPP_DASHBOARD } from './localization'

export const metaDataSmartsuppDashboard = createPageMetadata({
  meta: META_SMARTSUPP_DASHBOARD,
  pageUrl: PAGES_URL.workSmartsuppDashboard,
  ogImage: smartsuppDashboardOG,
  twitterImage: smartsuppDashboardTwitter,
})
