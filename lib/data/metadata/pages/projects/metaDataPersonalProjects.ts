import { Metadata } from 'next'

import { META_PROJECTS_OVERVIEW_PERSONAL, TEXT } from '@/localization/english'

import { ENV_URLS, PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { formatKeywordsString } from '@/lib/utils/helpers/metadata/formatKeywordsString'

import personalProjectsOverviewOG from '@/public/images/png/open-graph/pages/personal-projects/personal-projects-og.png'
import personalProjectsOverviewTwitter from '@/public/images/png/open-graph/pages/personal-projects/personal-projects-twitter.png'

export const metaDataPersonalProjects: Metadata = {
  title: META_PROJECTS_OVERVIEW_PERSONAL.title,
  description: META_PROJECTS_OVERVIEW_PERSONAL.description,
  keywords: formatKeywordsString(META_PROJECTS_OVERVIEW_PERSONAL.keywords),
  openGraph: {
    title: META_PROJECTS_OVERVIEW_PERSONAL.title,
    description: META_PROJECTS_OVERVIEW_PERSONAL.description,
    images: [
      {
        url: personalProjectsOverviewOG.src,
      },
    ],
    url: ENV_URLS.production + PAGES_URL.personal.mainUrl,
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
