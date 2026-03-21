import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('CTA - Home - Work, Resume', () => {
  test('should render the Work Experience CTA link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const link = page.getByTestId(DATA_TEST_IDS.callToAction.linkWorkExperience)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', PAGES_URL.workExperience)
  })

  test('should render the Resume CTA link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const link = page.getByTestId(DATA_TEST_IDS.callToAction.linkResume)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', PAGES_URL.resume)
  })

  test('should render the LinkedIn photo inside the CTA correctly', async ({ page }) => {
    await page.goto(PAGES_URL.home)
    const photo = page.getByTestId(DATA_TEST_IDS.misc.linkedinPhoto)

    await expect(photo).toBeVisible()
  })
})
