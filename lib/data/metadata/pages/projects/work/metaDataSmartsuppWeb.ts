import { Metadata } from 'next'

import { META_SMARTSUPP_WEB, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import smartsuppWebOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-og.png'
import smartsuppWebTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-twitter.png'

export const metaDataSmartsuppWeb: Metadata = {
  title: META_SMARTSUPP_WEB.title,
  description: META_SMARTSUPP_WEB.description,
  keywords: formatKeywordsString(META_SMARTSUPP_WEB.keywords),
  openGraph: {
    title: META_SMARTSUPP_WEB.title,
    description: META_SMARTSUPP_WEB.description,
    images: [
      {
        url: smartsuppWebOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.work.smartsupp.web,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_SMARTSUPP_WEB.title,
    description: META_SMARTSUPP_WEB.description,
    images: [
      {
        url: smartsuppWebTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
