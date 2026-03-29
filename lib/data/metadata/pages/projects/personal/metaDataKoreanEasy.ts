import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import koreanEasyOG from '@/public/images/png/open-graph/pages/personal-projects/korean-easy/korean-easy-og.png'
import koreanEasyTwitter from '@/public/images/png/open-graph/pages/personal-projects/korean-easy/korean-easy-twitter.png'

import { META_KOREAN_EASY } from '@/localization'

export const metaDataKoreanEasy = createPageMetadata({
  meta: META_KOREAN_EASY,
  pageUrl: PAGES_URL.personalKoreanEasy,
  ogImage: koreanEasyOG,
  twitterImage: koreanEasyTwitter,
})
