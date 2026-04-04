import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import krsiakOG from '@/public/images/png/open-graph/pages/personal-projects/krsiak/krsiak-og.png'
import krsiakTwitter from '@/public/images/png/open-graph/pages/personal-projects/krsiak/krsiak-twitter.png'

import { META_KRSIAK } from './localization'

export const metaDataKrsiak = createPageMetadata({
  meta: META_KRSIAK,
  pageUrl: PAGES_URL.personalKrsiak,
  ogImage: krsiakOG,
  twitterImage: krsiakTwitter,
})
