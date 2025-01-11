import { Metadata } from 'next'

import { META_PROJECTS_OVERVIEW_WORK, TEXT } from '@/localization/english'

import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

import workExperienceOG from '@/public/images/png/open-graph/pages/work-experience/overview-page/work-experience-og.png'
import workExperienceTwitter from '@/public/images/png/open-graph/pages/work-experience/overview-page/work-experience-twitter.png'

export const metaDataWorkExperience: Metadata = {
  title: META_PROJECTS_OVERVIEW_WORK.title,
  description: META_PROJECTS_OVERVIEW_WORK.description,
  keywords: getKeywordsString(META_PROJECTS_OVERVIEW_WORK.keywords),
  openGraph: {
    title: META_PROJECTS_OVERVIEW_WORK.title,
    description: META_PROJECTS_OVERVIEW_WORK.description,
    images: [
      {
        url: workExperienceOG.src,
      },
    ],
    url: PAGES_URL.fullWebsiteUrl + PAGES_URL.work.mainUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: META_PROJECTS_OVERVIEW_WORK.title,
    description: META_PROJECTS_OVERVIEW_WORK.description,
    images: [
      {
        url: workExperienceTwitter.src,
      },
    ],
    site: TEXT.twitter,
  },
}
