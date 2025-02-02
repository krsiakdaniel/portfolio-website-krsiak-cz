import { Page, expect } from '@playwright/test'

/**
 * Tests that a project link navigates to the correct page and contains the correct text.
 *
 * @param {Page} page - The Playwright page object.
 * @param {string} projectPage - The expected URL of the project page.
 * @param {string} projectID - The data-testid attribute of the project link.
 * @returns {Promise<void>} - A promise that resolves when the test is complete.
 */

export const testProjectLink = async (
  page: Page,
  projectPage: string,
  projectID: string,
): Promise<void> => {
  const pageLink = projectPage

  const projectDetailsLink = page.getByTestId(projectID)

  const linkText = await projectDetailsLink.innerText()
  expect(linkText).toContain('Project details')

  const linkUrl = await projectDetailsLink.getAttribute('href')
  expect(linkUrl).toBe(pageLink)

  await projectDetailsLink.click()

  expect(page.url()).toContain(pageLink)
}
