import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import statusOG from '@/public/images/png/open-graph/pages/status/status-og.png'
import statusTwitter from '@/public/images/png/open-graph/pages/status/status-twitter.png'

import { META_STATUS } from '@/localization'

export const metaDataStatus = createPageMetadata({
  meta: META_STATUS,
  pageUrl: PAGES_URL.status,
  ogImage: statusOG,
  twitterImage: statusTwitter,
})
