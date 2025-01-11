import { Metadata } from 'next'

import { META_SMARTSUPP_WEB, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import smartsuppWebOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-og.png'
import smartsuppWebTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-web-twitter.png'

export const metaDataSmartsuppWeb: Metadata = {
  title: META_SMARTSUPP_WEB.title,
  description: META_SMARTSUPP_WEB.description,
  keywords: getKeywordsString(META_SMARTSUPP_WEB.keywords),
  openGraph: {
    title: META_SMARTSUPP_WEB.title,
    description: META_SMARTSUPP_WEB.description,
    images: [
      {
        url: smartsuppWebOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.work.smartsupp.web,
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
