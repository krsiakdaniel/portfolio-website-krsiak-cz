import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import { META_KOREAN_EASY } from '@/localization'

export const metaDataKoreanEasy = createPageMetadata({
  meta: META_KOREAN_EASY,
  pageUrl: PAGES_URL.personalKoreanEasy,
})
