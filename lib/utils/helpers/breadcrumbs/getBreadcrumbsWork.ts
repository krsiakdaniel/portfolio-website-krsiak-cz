import { URL_WORK_EXPERIENCE } from '@/lib/utils/constants/urls/pageUrls'
import { TEXT } from '@/localization/english'

import { BreadCrumbsType } from '@/lib/utils/interfaces/types'

export const getBreadcrumbsWork = (level2Url: string, level2Text: string): BreadCrumbsType => {
  return {
    level1Url: URL_WORK_EXPERIENCE,
    level1Text: TEXT.workExperience,
    level2Url,
    level2Text,
  }
}
