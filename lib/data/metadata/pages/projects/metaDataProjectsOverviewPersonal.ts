import { Metadata } from 'next'

import { META_PROJECTS_OVERVIEW_PERSONAL } from '@/localization/english'

import { getKeywordsString } from '@/lib/utils/helpers/getMetaKeywords'

export const metaDataProjectsOverviewPersonal: Metadata = {
  title: META_PROJECTS_OVERVIEW_PERSONAL.title,
  description: META_PROJECTS_OVERVIEW_PERSONAL.description,
  keywords: getKeywordsString(META_PROJECTS_OVERVIEW_PERSONAL.keywords),
}
