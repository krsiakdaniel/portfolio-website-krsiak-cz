import { GetMenuLinkIDType } from '@/lib/utils/typeDefinitions/types'

/**
 * Returns the ID string for a menu link based on whether it is displayed on mobile or desktop.
 *
 * @param {boolean} isMobile - A boolean indicating if the menu is displayed on a mobile device or desktop.
 * @param {string} linkID - The base ID of the link.
 * @returns {string} - The ID string for the menu link.
 */
export const getMenuLinkID = ({ isMobile, linkID }: GetMenuLinkIDType): string => {
  return isMobile ? `mobile-${linkID}-link` : `desktop-${linkID}-link`
}
