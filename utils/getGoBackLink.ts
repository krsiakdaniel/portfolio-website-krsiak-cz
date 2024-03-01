import { ID_PROJECTS_PERSONAL, ID_PROJECTS_WORK } from '@/utils/constants'
import { ProjectType } from '@/utils/types'

export const getGoBackLinkID = (goBackLink: ProjectType): string => {
  switch (goBackLink) {
    case 'work':
      return `/#${ID_PROJECTS_WORK}`
    case 'personal':
      return `/#${ID_PROJECTS_PERSONAL}`
    default:
      return '/'
  }
}
