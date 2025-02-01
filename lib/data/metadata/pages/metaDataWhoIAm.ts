import { Metadata } from 'next'

import { META_WHO_I_AM, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import whoIAmOG from '@/public/images/png/open-graph/pages/who-i-am/who-i-am-og.png'
import whoIAmTwitter from '@/public/images/png/open-graph/pages/who-i-am/who-i-am-twitter.png'

export const metaDataWhoIam: Metadata = {
  title: META_WHO_I_AM.title,
  description: META_WHO_I_AM.description,
  keywords: formatKeywordsString(META_WHO_I_AM.keywords),
  openGraph: {
    title: META_WHO_I_AM.title,
    description: META_WHO_I_AM.description,
    images: [
      {
        url: whoIAmOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.whoIAm,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_WHO_I_AM.title,
    description: META_WHO_I_AM.description,
    images: [
      {
        url: whoIAmTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
