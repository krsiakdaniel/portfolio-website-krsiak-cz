import { Metadata } from 'next'

import { META_SMARTSUPP_HELP, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import smartsuppHelpOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-og.png'
import smartsuppHelpTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-help-twitter.png'

export const metaDataSmartsuppHelp: Metadata = {
  title: META_SMARTSUPP_HELP.title,
  description: META_SMARTSUPP_HELP.description,
  keywords: formatKeywordsString(META_SMARTSUPP_HELP.keywords),
  openGraph: {
    title: META_SMARTSUPP_HELP.title,
    description: META_SMARTSUPP_HELP.description,
    images: [
      {
        url: smartsuppHelpOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.work.smartsupp.help,
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
