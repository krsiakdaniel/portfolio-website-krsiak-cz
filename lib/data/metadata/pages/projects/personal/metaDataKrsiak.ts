import { Metadata } from 'next'

import { META_KRSIAK } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataKrsiak: Metadata = {
  title: META_KRSIAK.title,
  description: META_KRSIAK.description,
  keywords: getKeywordsString(META_KRSIAK.keywords),
}
