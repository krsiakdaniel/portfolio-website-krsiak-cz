import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import cryptomaniaOG from '@/public/images/png/open-graph/pages/personal-projects/cryptomania/cryptomania-og.png'
import cryptomaniaTwitter from '@/public/images/png/open-graph/pages/personal-projects/cryptomania/cryptomania-twitter.png'

import { META_CRYPTOMANIA } from '@/localization'

export const metaDataCryptomania = createPageMetadata({
  meta: META_CRYPTOMANIA,
  pageUrl: PAGES_URL.personalCryptoMania,
  ogImage: cryptomaniaOG,
  twitterImage: cryptomaniaTwitter,
})
