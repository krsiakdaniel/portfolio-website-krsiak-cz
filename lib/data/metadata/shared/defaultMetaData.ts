import { Metadata } from 'next'

import { COMMON_VALUES, META_DEFAULT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

export const defaultMetaData: Metadata = {
  metadataBase: new URL(PAGES_URL.websiteProduction),
  title: META_DEFAULT.title,
  description: META_DEFAULT.description,
  keywords: formatKeywordsString(META_DEFAULT.keywords),
  generator: META_DEFAULT.generator,
  applicationName: META_DEFAULT.applicationName,
  authors: [{ name: COMMON_VALUES.nameDanielKrsiak, url: PAGES_URL.websiteProduction }],
  referrer: 'origin-when-cross-origin',
  manifest: '/manifest.webmanifest',
  robots: 'index, follow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
