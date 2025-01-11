import { Metadata } from 'next'

import { META_SMARTSUPP_DASHBOARD, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import smartsuppDashboardOG from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-og.png'
import smartsuppDashboardTwitter from '@/public/images/png/open-graph/pages/work-experience/smartsupp/smartsupp-dashboard-twitter.png'

export const metaDataSmartsuppDashboard: Metadata = {
  title: META_SMARTSUPP_DASHBOARD.title,
  description: META_SMARTSUPP_DASHBOARD.description,
  keywords: getKeywordsString(META_SMARTSUPP_DASHBOARD.keywords),
  openGraph: {
    title: META_SMARTSUPP_DASHBOARD.title,
    description: META_SMARTSUPP_DASHBOARD.description,
    images: [
      {
        url: smartsuppDashboardOG.src,
      },
    ],
    url: PAGES_URL.websiteProduction + PAGES_URL.work.smartsupp.dashboard,
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
