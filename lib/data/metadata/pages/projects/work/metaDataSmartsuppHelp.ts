import { Metadata } from 'next'

import { META_SMARTSUPP_HELP, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import smartsuppHelpOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-og.png'
import smartsuppHelpTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-twitter.png'

export const metaDataSmartsuppHelp: Metadata = {
  title: META_SMARTSUPP_HELP.title,
  description: META_SMARTSUPP_HELP.description,
  keywords: getKeywordsString(META_SMARTSUPP_HELP.keywords),
  openGraph: {
    title: META_SMARTSUPP_HELP.title,
    description: META_SMARTSUPP_HELP.description,
    images: [
      {
        url: smartsuppHelpOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.work.smartsupp.help,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_SMARTSUPP_HELP.title,
    description: META_SMARTSUPP_HELP.description,
    images: [
      {
        url: smartsuppHelpTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
