import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Work Experience - Layout Toggle', () => {
  test('should show grid view by default', async ({ page }) => {
    await page.goto(PAGES_URL.workExperience)

    // The grid toggle button should be visible
    await expect(page.getByTestId(DATA_TEST_IDS.layoutToggle.gridView)).toBeVisible()
    await expect(page.getByTestId(DATA_TEST_IDS.layoutToggle.listView)).toBeVisible()

    // Grid sections (e.g. React section heading) should be visible in default grid view
    await expect(page.locator('#react')).toBeVisible()
  })

  test('should switch to list view when list toggle is clicked', async ({ page }) => {
    await page.goto(PAGES_URL.workExperience)

    await page.getByTestId(DATA_TEST_IDS.layoutToggle.listView).click()

    // Grid sections should no longer be in the DOM
    await expect(page.locator('#react')).not.toBeAttached()
  })

  test('should switch back to grid view when grid toggle is clicked', async ({ page }) => {
    await page.goto(PAGES_URL.workExperience)

    // Switch to list first
    await page.getByTestId(DATA_TEST_IDS.layoutToggle.listView).click()
    await expect(page.locator('#react')).not.toBeAttached()

    // Switch back to grid
    await page.getByTestId(DATA_TEST_IDS.layoutToggle.gridView).click()
    await expect(page.locator('#react')).toBeVisible()
  })
})
