import { Metadata } from 'next'

import { META_KOOPERATIVA, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import kooperativaOG from '@/public/images/png/open-graph/pages/work-experience/kooperativa-og.png'
import kooperativaTwitter from '@/public/images/png/open-graph/pages/work-experience/kooperativa-twitter.png'

export const metaDataKooperativa: Metadata = {
  title: META_KOOPERATIVA.title,
  description: META_KOOPERATIVA.description,
  keywords: getKeywordsString(META_KOOPERATIVA.keywords),
  openGraph: {
    title: META_KOOPERATIVA.title,
    description: META_KOOPERATIVA.description,
    images: [
      {
        url: kooperativaOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.work.kooperativa,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_KOOPERATIVA.title,
    description: META_KOOPERATIVA.description,
    images: [
      {
        url: kooperativaTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
