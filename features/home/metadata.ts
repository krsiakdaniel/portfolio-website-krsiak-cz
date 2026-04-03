import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import homeOG from '@/public/images/png/open-graph/pages/home/home-og.png'
import homeTwitter from '@/public/images/png/open-graph/pages/home/home-twitter.png'

import { META_HOME } from './localization'

export const metaDataHome = createPageMetadata({
  meta: META_HOME,
  ogImage: homeOG,
  twitterImage: homeTwitter,
})
