import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import whoIAmOG from '@/public/images/png/open-graph/pages/who-i-am/who-i-am-og.png'
import whoIAmTwitter from '@/public/images/png/open-graph/pages/who-i-am/who-i-am-twitter.png'

import { META_WHO_I_AM } from './localization'

export const metaDataWhoIam = createPageMetadata({
  meta: META_WHO_I_AM,
  pageUrl: PAGES_URL.whoIAm,
  ogImage: whoIAmOG,
  twitterImage: whoIAmTwitter,
})
