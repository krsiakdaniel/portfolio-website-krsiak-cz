import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import workExperienceOG from '@/public/images/png/open-graph/pages/work-experience/work-experience-og.png'
import workExperienceTwitter from '@/public/images/png/open-graph/pages/work-experience/work-experience-twitter.png'

import { META_PROJECTS_OVERVIEW_WORK } from './localization'

export const metaDataWorkExperience = createPageMetadata({
  meta: META_PROJECTS_OVERVIEW_WORK,
  pageUrl: PAGES_URL.workExperience,
  ogImage: workExperienceOG,
  twitterImage: workExperienceTwitter,
})
