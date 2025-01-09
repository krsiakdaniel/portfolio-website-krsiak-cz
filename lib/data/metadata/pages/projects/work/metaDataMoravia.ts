import { Metadata } from 'next'

import { META_MORAVIA } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataMoravia: Metadata = {
  title: META_MORAVIA.title,
  description: META_MORAVIA.description,
  keywords: getKeywordsString(META_MORAVIA.keywords),
}
