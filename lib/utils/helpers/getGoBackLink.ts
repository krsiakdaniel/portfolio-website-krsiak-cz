import { PAGES_URL, URL_PERSONAL_PROJECTS, URL_WORK_EXPERIENCE } from '@/lib/utils/constants/urls/pageUrls'

import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

/**
 * Generates the go-back link based on the provided section and ID.
 *
 * @param {GoBackLinkEnum} goBackLink - The section to go back to (work or personal).
 * @param {string} sectionID - The ID of the section to navigate to.
 * @returns {string} - The generated go-back link.
 */

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
