import { Metadata } from 'next'

import { META_STATUS_PAGE } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataStatusPage: Metadata = {
  title: META_STATUS_PAGE.title,
  description: META_STATUS_PAGE.description,
  keywords: getKeywordsString(META_STATUS_PAGE.keywords),
}
