import { ID_PROJECTS_PERSONAL, ID_PROJECTS_WORK } from '@/utils/constants'
import { GoBackLinkType } from '@/utils/types'

export const getGoBackLinkID = (goBackLink: GoBackLinkType): string => {
  switch (goBackLink) {
    case 'work':
      return `/#${ID_PROJECTS_WORK}`
    case 'personal':
      return `/#${ID_PROJECTS_PERSONAL}`
    default:
      return '/'
  }
}
