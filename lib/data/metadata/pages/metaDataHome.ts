import { Metadata } from 'next'

import { ENV_URLS } from '@/lib/utils/constants/urls/pageUrls'
import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import homeOG from '@/public/images/png/open-graph/pages/home/home-og.png'
import homeTwitter from '@/public/images/png/open-graph/pages/home/home-twitter.png'

import { META_HOME, TEXT } from '@/localization'

export const metaDataHome: Metadata = {
  title: META_HOME.title,
  description: META_HOME.description,
  keywords: formatKeywordsString(META_HOME.keywords),
  openGraph: {
    title: META_HOME.title,
    description: META_HOME.description,
    images: [
      {
        url: homeOG.src,
      },
    ],
    url: ENV_URLS.production,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_HOME.title,
    description: META_HOME.description,
    images: [
      {
        url: homeTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
