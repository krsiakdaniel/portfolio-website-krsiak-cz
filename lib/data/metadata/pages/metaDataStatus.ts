import { Metadata } from 'next'

import { META_STATUS, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import statusOG from '@/public/images/png/open-graph/pages/status/status-og.png'
import statusTwitter from '@/public/images/png/open-graph/pages/status/status-twitter.png'

export const metaDataStatus: Metadata = {
  title: META_STATUS.title,
  description: META_STATUS.description,
  keywords: formatKeywordsString(META_STATUS.keywords),
  openGraph: {
    title: META_STATUS.title,
    description: META_STATUS.description,
    images: [
      {
        url: statusOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.status,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_STATUS.title,
    description: META_STATUS.description,
    images: [
      {
        url: statusTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
