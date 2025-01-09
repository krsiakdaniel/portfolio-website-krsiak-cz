import { Metadata } from 'next'

import { META_CRYPTOMANIA } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataCryptomania: Metadata = {
  title: META_CRYPTOMANIA.title,
  description: META_CRYPTOMANIA.description,
  keywords: getKeywordsString(META_CRYPTOMANIA.keywords),
}
