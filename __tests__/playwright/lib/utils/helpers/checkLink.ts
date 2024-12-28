import { Page, expect } from '@playwright/test'

/**
 * Checks that a link with a given data-testid attribute has the expected href value.
 *
 * @param {Page} page - The Playwright page object.
 * @param {string} testId - The data-testid attribute of the link.
 * @param {string} expectedHref - The expected href value of the link.
 * @returns {Promise<void>} - A promise that resolves when the check is complete.
 */

export const checkLink = async (page: Page, testId: string, expectedHref: string): Promise<void> => {
  const link = await page.getAttribute(`[data-testid="${testId}"]`, 'href')
  expect(link).toBe(expectedHref)
}
