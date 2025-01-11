import { Metadata } from 'next'

import { META_PROJECTS_OVERVIEW_PERSONAL, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import personalProjectsOverviewOG from '@/public/images/png/open-graph/pages/personal-projects-overview/personal-projects-overview-og.png'
import personalProjectsOverviewTwitter from '@/public/images/png/open-graph/pages/personal-projects-overview/personal-projects-overview-twitter.png'

export const metaDataPersonalProjects: Metadata = {
  title: META_PROJECTS_OVERVIEW_PERSONAL.title,
  description: META_PROJECTS_OVERVIEW_PERSONAL.description,
  keywords: getKeywordsString(META_PROJECTS_OVERVIEW_PERSONAL.keywords),
  openGraph: {
    title: META_PROJECTS_OVERVIEW_PERSONAL.title,
    description: META_PROJECTS_OVERVIEW_PERSONAL.description,
    images: [
      {
        url: personalProjectsOverviewOG.src,
      },
    ],
    url: PAGES_URL.fullWebsiteUrl + PAGES_URL.personal.mainUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_PROJECTS_OVERVIEW_PERSONAL.title,
    description: META_PROJECTS_OVERVIEW_PERSONAL.description,
    images: [
      {
        url: personalProjectsOverviewTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
