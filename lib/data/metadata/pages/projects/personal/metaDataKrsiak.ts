import { Metadata } from 'next'

import { META_KRSIAK, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import krsiakOG from '@/public/images/png/open-graph/pages/personal-projects/krsiak-og.png'
import krsiakTwitter from '@/public/images/png/open-graph/pages/personal-projects/krsiak-twitter.png'

export const metaDataKrsiak: Metadata = {
  title: META_KRSIAK.title,
  description: META_KRSIAK.description,
  keywords: getKeywordsString(META_KRSIAK.keywords),
  openGraph: {
    title: META_KRSIAK.title,
    description: META_KRSIAK.description,
    images: [
      {
        url: krsiakOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.personal.krsiak,
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
