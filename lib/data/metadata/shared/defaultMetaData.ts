import { Metadata } from 'next'

import { COMMON_VALUES, META_DEFAULT } from '@/localization/english'

import { FULL_WEBSITE_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const defaultMetaData: Metadata = {
  title: META_DEFAULT.title,
  description: META_DEFAULT.description,
  keywords: getKeywordsString(META_DEFAULT.keywords),
  generator: META_DEFAULT.generator,
  applicationName: META_DEFAULT.applicationName,
  authors: [{ name: COMMON_VALUES.nameDanielKrsiak, url: FULL_WEBSITE_URL }],
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.webmanifest',
  robots: 'index, follow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
