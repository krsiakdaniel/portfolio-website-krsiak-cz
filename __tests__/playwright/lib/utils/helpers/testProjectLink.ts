import { type Page, expect } from '@playwright/test'

import { UI_TEXTS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'

/**
 * Tests that a project link navigates to the correct page and contains the correct text.
 */
export const testProjectLink = async (
  page: Page,
  projectPage: string,
  projectID: string,
): Promise<void> => {
  const projectDetailsLink = page.getByTestId(projectID)

  await expect(projectDetailsLink).toContainText(UI_TEXTS.projectDetails)
  await expect(projectDetailsLink).toHaveAttribute('href', projectPage)

  await projectDetailsLink.click()
  await expect(page).toHaveURL(new RegExp(projectPage))
}
