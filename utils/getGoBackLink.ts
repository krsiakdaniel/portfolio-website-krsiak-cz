import { ID_PROJECTS_PERSONAL, ID_PROJECTS_WORK } from '@/utils/constants'
import { GoBackLinkType } from '@/utils/types'

export const getGoBackLinkID = (goBackLink: GoBackLinkType, sectionID: string): string => {
  switch (goBackLink) {
    case 'work':
      return `/#${ID_PROJECTS_WORK}-${sectionID}`
    case 'personal':
      return `/#${ID_PROJECTS_PERSONAL}-${sectionID}`
    default:
      return '/'
  }
}
