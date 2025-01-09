import { Metadata } from 'next'

import { META_PROJECTS_OVERVIEW_WORK } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataProjectsOverviewWork: Metadata = {
  title: META_PROJECTS_OVERVIEW_WORK.title,
  description: META_PROJECTS_OVERVIEW_WORK.description,
  keywords: getKeywordsString(META_PROJECTS_OVERVIEW_WORK.keywords),
}
