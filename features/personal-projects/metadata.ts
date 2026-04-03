import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { createPageMetadata } from '@/lib/utils/helpers/metadata/createPageMetadata'

import personalProjectsOverviewOG from '@/public/images/png/open-graph/pages/personal-projects/personal-projects-og.png'
import personalProjectsOverviewTwitter from '@/public/images/png/open-graph/pages/personal-projects/personal-projects-twitter.png'

import { META_PROJECTS_OVERVIEW_PERSONAL } from './localization'

export const metaDataPersonalProjects = createPageMetadata({
  meta: META_PROJECTS_OVERVIEW_PERSONAL,
  pageUrl: PAGES_URL.personalProjects,
  ogImage: personalProjectsOverviewOG,
  twitterImage: personalProjectsOverviewTwitter,
})
