import { Metadata } from 'next'

import { META_SMARTSUPP_HELP } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataSmartsuppHelp: Metadata = {
  title: META_SMARTSUPP_HELP.title,
  description: META_SMARTSUPP_HELP.description,
  keywords: getKeywordsString(META_SMARTSUPP_HELP.keywords),
}
