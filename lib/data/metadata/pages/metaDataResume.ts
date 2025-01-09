import { Metadata } from 'next'

import { META_RESUME } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataResume: Metadata = {
  title: META_RESUME.title,
  description: META_RESUME.description,
  keywords: getKeywordsString(META_RESUME.keywords),
}
