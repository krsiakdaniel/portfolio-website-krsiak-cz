import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import moraviaOG from '@/public/images/png/open-graph/pages/work-experience/moravia/moravia-og.png'
import moraviaTwitter from '@/public/images/png/open-graph/pages/work-experience/moravia/moravia-twitter.png'

import { META_MORAVIA } from './localization'

export const metaDataMoravia = createPageMetadata({
  meta: META_MORAVIA,
  pageUrl: PAGES_URL.workMoravia,
  ogImage: moraviaOG,
  twitterImage: moraviaTwitter,
})
