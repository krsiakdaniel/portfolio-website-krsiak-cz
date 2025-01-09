import { Metadata } from 'next'

import { META_KOMERCNI_BANKA } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataKomercniBanka: Metadata = {
  title: META_KOMERCNI_BANKA.title,
  description: META_KOMERCNI_BANKA.description,
  keywords: getKeywordsString(META_KOMERCNI_BANKA.keywords),
}
