import { Metadata } from 'next'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import { META_KOREAN_EASY } from '@/localization'

export const metaDataKoreanEasy: Metadata = {
  title: META_KOREAN_EASY.title,
  description: META_KOREAN_EASY.description,
  keywords: formatKeywordsString(META_KOREAN_EASY.keywords),
  openGraph: {
    title: META_KOREAN_EASY.title,
    description: META_KOREAN_EASY.description,
    url: ENV_URLS.production + PAGES_URL.personalKoreanEasy,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_KOREAN_EASY.title,
    description: META_KOREAN_EASY.description,
  },
}
