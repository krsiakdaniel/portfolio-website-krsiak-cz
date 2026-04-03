import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import resumeOG from '@/public/images/png/open-graph/pages/resume/resume-og.png'
import resumeTwitter from '@/public/images/png/open-graph/pages/resume/resume-twitter.png'

import { META_RESUME } from './localization'

export const metaDataResume = createPageMetadata({
  meta: META_RESUME,
  pageUrl: PAGES_URL.resume,
  ogImage: resumeOG,
  twitterImage: resumeTwitter,
})
