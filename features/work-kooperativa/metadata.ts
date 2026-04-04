import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import kooperativaOG from '@/public/images/png/open-graph/pages/work-experience/kooperativa/kooperativa-og.png'
import kooperativaTwitter from '@/public/images/png/open-graph/pages/work-experience/kooperativa/kooperativa-twitter.png'

import { META_KOOPERATIVA } from './localization'

export const metaDataKooperativa = createPageMetadata({
  meta: META_KOOPERATIVA,
  pageUrl: PAGES_URL.workKooperativa,
  ogImage: kooperativaOG,
  twitterImage: kooperativaTwitter,
})
