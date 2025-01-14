import { Metadata } from 'next'

import { META_MORAVIA, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import moraviaOG from '@/public/images/png/open-graph/pages/work-experience/moravia-og.png'
import moraviaTwitter from '@/public/images/png/open-graph/pages/work-experience/moravia-twitter.png'

export const metaDataMoravia: Metadata = {
  title: META_MORAVIA.title,
  description: META_MORAVIA.description,
  keywords: formatKeywordsString(META_MORAVIA.keywords),
  openGraph: {
    title: META_MORAVIA.title,
    description: META_MORAVIA.description,
    images: [
      {
        url: moraviaOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.work.moravia,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_MORAVIA.title,
    description: META_MORAVIA.description,
    images: [
      {
        url: moraviaTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
