import { Metadata } from 'next'

import { META_SMARTSUPP_DASHBOARD } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataSmartsuppDashboard: Metadata = {
  title: META_SMARTSUPP_DASHBOARD.title,
  description: META_SMARTSUPP_DASHBOARD.description,
  keywords: getKeywordsString(META_SMARTSUPP_DASHBOARD.keywords),
}
