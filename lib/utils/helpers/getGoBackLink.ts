import { PAGES_URL, URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/lib/utils/constants/urls/pageUrls'

import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const getGoBackLinkID = (goBackLink: GoBackLinkEnum, sectionID: string): string => {
  switch (goBackLink) {
    case 'work':
      return `${URL_WORK_EXPERIENCE}/#${sectionID}`
    case 'personal':
      return `${URL_PERSONAL_PROJECTS}/#${sectionID}`
    default:
      return PAGES_URL.home
  }
}
