import { Metadata } from 'next'

import { META_SMARTSUPP_WEB } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataSmartsuppWeb: Metadata = {
  title: META_SMARTSUPP_WEB.title,
  description: META_SMARTSUPP_WEB.description,
  keywords: getKeywordsString(META_SMARTSUPP_WEB.keywords),
}
