import { Metadata } from 'next'

import { META_STATUS_PAGE, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import statusPageOG from '@/public/images/png/open-graph/pages/status-page/status-page-og.png'
import statusPageTwitter from '@/public/images/png/open-graph/pages/status-page/status-page-twitter.png'

export const metaDataStatusPage: Metadata = {
  title: META_STATUS_PAGE.title,
  description: META_STATUS_PAGE.description,
  keywords: formatKeywordsString(META_STATUS_PAGE.keywords),
  openGraph: {
    title: META_STATUS_PAGE.title,
    description: META_STATUS_PAGE.description,
    images: [
      {
        url: statusPageOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.statusPage,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_STATUS_PAGE.title,
    description: META_STATUS_PAGE.description,
    images: [
      {
        url: statusPageTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
