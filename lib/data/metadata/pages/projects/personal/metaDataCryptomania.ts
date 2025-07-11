import { Metadata } from 'next'

import { META_CRYPTOMANIA, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import cryptomaniaOG from '@/public/images/png/open-graph/pages/personal-projects/cryptomania/cryptomania-og.png'
import cryptomaniaTwitter from '@/public/images/png/open-graph/pages/personal-projects/cryptomania/cryptomania-twitter.png'

export const metaDataCryptomania: Metadata = {
  title: META_CRYPTOMANIA.title,
  description: META_CRYPTOMANIA.description,
  keywords: formatKeywordsString(META_CRYPTOMANIA.keywords),
  openGraph: {
    title: META_CRYPTOMANIA.title,
    description: META_CRYPTOMANIA.description,
    images: [
      {
        url: cryptomaniaOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.personal.cryptoMania,
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
