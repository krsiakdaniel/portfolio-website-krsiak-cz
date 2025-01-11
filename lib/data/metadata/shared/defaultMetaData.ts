import { Metadata } from 'next'

import { COMMON_VALUES, META_DEFAULT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const defaultMetaData: Metadata = {
  metadataBase: new URL(PAGES_URL.fullWebsiteUrl),
  title: META_DEFAULT.title,
  description: META_DEFAULT.description,
  keywords: getKeywordsString(META_DEFAULT.keywords),
  generator: META_DEFAULT.generator,
  applicationName: META_DEFAULT.applicationName,
  authors: [{ name: COMMON_VALUES.nameDanielKrsiak, url: PAGES_URL.fullWebsiteUrl }],
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.webmanifest',
  robots: 'index, follow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
