import { Metadata } from 'next'

import { META_CRYPTOMANIA, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import cryptomaniaOG from '@/public/images/png/open-graph/pages/personal-projects/cryptomania-og.png'
import cryptomaniaTwitter from '@/public/images/png/open-graph/pages/personal-projects/cryptomania-twitter.png'

export const metaDataCryptomania: Metadata = {
  title: META_CRYPTOMANIA.title,
  description: META_CRYPTOMANIA.description,
  keywords: getKeywordsString(META_CRYPTOMANIA.keywords),
  openGraph: {
    title: META_CRYPTOMANIA.title,
    description: META_CRYPTOMANIA.description,
    images: [
      {
        url: cryptomaniaOG.src,
      },
    ],
    url: PAGES_URL.fullWebsiteUrl + PAGES_URL.personal.cryptoMania,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_CRYPTOMANIA.title,
    description: META_CRYPTOMANIA.description,
    images: [
      {
        url: cryptomaniaTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
