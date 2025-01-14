import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

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
      return `${PAGES_URL.work.mainUrl}/#${sectionID}`
    case 'personal':
      return `${PAGES_URL.personal.mainUrl}/#${sectionID}`
    default:
      return PAGES_URL.home
  }
}
