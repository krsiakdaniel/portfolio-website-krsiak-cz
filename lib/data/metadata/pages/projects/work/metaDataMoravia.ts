import { Metadata } from 'next'

import { META_MORAVIA, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import moraviaOG from '@/public/images/png/open-graph/pages/work-experience/moravia/moravia-og.png'
import moraviaTwitter from '@/public/images/png/open-graph/pages/work-experience/moravia/moravia-twitter.png'

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
    url: ENV_URLS.production + PAGES_URL.work.moravia,
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
