import { Metadata } from 'next'

import { META_GROUPON, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import grouponOG from '@/public/images/png/open-graph/pages/work-experience/groupon/groupon-og.png'
import grouponTwitter from '@/public/images/png/open-graph/pages/work-experience/groupon/groupon-twitter.png'

export const metaDataGroupon: Metadata = {
  title: META_GROUPON.title,
  description: META_GROUPON.description,
  keywords: formatKeywordsString(META_GROUPON.keywords),
  openGraph: {
    title: META_GROUPON.title,
    description: META_GROUPON.description,
    images: [
      {
        url: grouponOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.work.groupon,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_GROUPON.title,
    description: META_GROUPON.description,
    images: [
      {
        url: grouponTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
