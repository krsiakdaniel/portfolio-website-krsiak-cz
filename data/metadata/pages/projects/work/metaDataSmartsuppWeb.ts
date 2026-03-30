import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import smartsuppWebOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-og.png'
import smartsuppWebTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-twitter.png'

import { META_SMARTSUPP_WEB } from '@/localization'

export const metaDataSmartsuppWeb = createPageMetadata({
  meta: META_SMARTSUPP_WEB,
  pageUrl: PAGES_URL.workSmartsuppWeb,
  ogImage: smartsuppWebOG,
  twitterImage: smartsuppWebTwitter,
})
