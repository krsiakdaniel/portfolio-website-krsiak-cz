import { Metadata } from 'next'

import { META_KOOPERATIVA } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataKooperativa: Metadata = {
  title: META_KOOPERATIVA.title,
  description: META_KOOPERATIVA.description,
  keywords: getKeywordsString(META_KOOPERATIVA.keywords),
}
