import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import grouponOG from '@/public/images/png/open-graph/pages/work-experience/groupon/groupon-og.png'
import grouponTwitter from '@/public/images/png/open-graph/pages/work-experience/groupon/groupon-twitter.png'

import { META_GROUPON } from '@/localization'

export const metaDataGroupon = createPageMetadata({
  meta: META_GROUPON,
  pageUrl: PAGES_URL.workGroupon,
  ogImage: grouponOG,
  twitterImage: grouponTwitter,
})
