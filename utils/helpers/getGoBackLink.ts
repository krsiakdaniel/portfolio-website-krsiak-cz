import { GoBackLinkType } from '@/utils/interfaces/types'

export const getGoBackLinkID = (goBackLink: GoBackLinkType, sectionID: string): string => {
  switch (goBackLink) {
    case 'work':
      return `/work-experience/#${sectionID}`
    case 'personal':
      return `/personal-projects/#${sectionID}`
    default:
      return '/'
  }
}
