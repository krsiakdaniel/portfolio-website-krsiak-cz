import { Metadata } from 'next'

import { META_KRSIAK, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import krsiakOG from '@/public/images/png/open-graph/pages/personal-projects/krsiak/krsiak-og.png'
import krsiakTwitter from '@/public/images/png/open-graph/pages/personal-projects/krsiak/krsiak-twitter.png'

export const metaDataKrsiak: Metadata = {
  title: META_KRSIAK.title,
  description: META_KRSIAK.description,
  keywords: formatKeywordsString(META_KRSIAK.keywords),
  openGraph: {
    title: META_KRSIAK.title,
    description: META_KRSIAK.description,
    images: [
      {
        url: krsiakOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.personal.krsiak,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_KRSIAK.title,
    description: META_KRSIAK.description,
    images: [
      {
        url: krsiakTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
