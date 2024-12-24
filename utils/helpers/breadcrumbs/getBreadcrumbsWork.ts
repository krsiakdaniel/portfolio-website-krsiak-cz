import { TEXT } from '@/localization/english'
import { URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'

export const getBreadcrumbsWork = (level2Url: string, level2Text: string): BreadCrumbsType => {
  return {
    level1Url: URL_WORK_EXPERIENCE,
    level1Text: TEXT.workExperience,
    level2Url: level2Url,
    level2Text: level2Text,
  }
}
