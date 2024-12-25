import { TEXT } from '@/localization/english'
import { URL_PERSONAL_PROJECTS } from '@/utils/constants/urls/pageUrls'

import { BreadCrumbsType } from '@/utils/interfaces/types'

export const getBreadcrumbsPersonal = (level2Url: string, level2Text: string): BreadCrumbsType => {
  return {
    level1Url: URL_PERSONAL_PROJECTS,
    level1Text: TEXT.personalProjects,
    level2Url,
    level2Text,
  }
}
