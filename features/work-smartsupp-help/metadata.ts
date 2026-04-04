import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import smartsuppHelpOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-og.png'
import smartsuppHelpTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-twitter.png'

import { META_SMARTSUPP_HELP } from './localization'

export const metaDataSmartsuppHelp = createPageMetadata({
  meta: META_SMARTSUPP_HELP,
  pageUrl: PAGES_URL.workSmartsuppHelp,
  ogImage: smartsuppHelpOG,
  twitterImage: smartsuppHelpTwitter,
})
