import { Page, expect } from '@playwright/test'

/**
 * Tests that a project list row link navigates to the correct page.
 * Unlike testProjectLink, this does not check for link text content
 * because list rows show only the project title and an arrow icon.
 */
export const testProjectListRowLink = async (
  page: Page,
  projectPage: string,
  projectID: string,
): Promise<void> => {
  const listRowLink = page.getByTestId(projectID)

  await expect(listRowLink).toBeVisible()
  await expect(listRowLink).toHaveAttribute('href', projectPage)

  await listRowLink.click()
  await expect(page).toHaveURL(new RegExp(projectPage))
}
