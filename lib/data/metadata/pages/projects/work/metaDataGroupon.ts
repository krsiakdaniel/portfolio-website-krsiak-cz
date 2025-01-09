import { Metadata } from 'next'

import { META_GROUPON } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataGroupon: Metadata = {
  title: META_GROUPON.title,
  description: META_GROUPON.description,
  keywords: getKeywordsString(META_GROUPON.keywords),
}
