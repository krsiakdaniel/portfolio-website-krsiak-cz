/**
 * Determines if a menu item should be marked as active based on the current pathname
 *
 * @param currentPathname - The current pathname from usePathname()
 * @param menuItemHref - The href of the menu item
 * @returns boolean - true if the menu item should be active
 */
export const isMenuItemActive = (currentPathname: string, menuItemHref: string): boolean => {
  // Handle empty strings or invalid input
  if (!currentPathname || !menuItemHref) {
    return false
  }

  // Handle home page - exact match only
  if (menuItemHref === '/') {
    return currentPathname === '/'
  }

  // For other pages, check if current path starts with the menu item href
  // But ensure we're matching complete path segments to avoid false positives
  // e.g., /personal-projects should not match /personal
  return currentPathname === menuItemHref || currentPathname.startsWith(menuItemHref + '/')
}
