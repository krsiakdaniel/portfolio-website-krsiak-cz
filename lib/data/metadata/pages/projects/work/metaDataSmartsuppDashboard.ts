import { Metadata } from 'next'

import { META_SMARTSUPP_DASHBOARD, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import smartsuppDashboardOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-og.png'
import smartsuppDashboardTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-twitter.png'

export const metaDataSmartsuppDashboard: Metadata = {
  title: META_SMARTSUPP_DASHBOARD.title,
  description: META_SMARTSUPP_DASHBOARD.description,
  keywords: formatKeywordsString(META_SMARTSUPP_DASHBOARD.keywords),
  openGraph: {
    title: META_SMARTSUPP_DASHBOARD.title,
    description: META_SMARTSUPP_DASHBOARD.description,
    images: [
      {
        url: smartsuppDashboardOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.work.smartsupp.dashboard,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_SMARTSUPP_DASHBOARD.title,
    description: META_SMARTSUPP_DASHBOARD.description,
    images: [
      {
        url: smartsuppDashboardTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
