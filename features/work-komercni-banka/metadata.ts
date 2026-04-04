import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import komercniBankaOG from '@/public/images/png/open-graph/pages/work-experience/komercni-banka/komercni-banka-og.png'
import komercniBankaTwitter from '@/public/images/png/open-graph/pages/work-experience/komercni-banka/komercni-banka-twitter.png'

import { META_KOMERCNI_BANKA } from './localization'

export const metaDataKomercniBanka = createPageMetadata({
  meta: META_KOMERCNI_BANKA,
  pageUrl: PAGES_URL.workKomercniBanka,
  ogImage: komercniBankaOG,
  twitterImage: komercniBankaTwitter,
})
