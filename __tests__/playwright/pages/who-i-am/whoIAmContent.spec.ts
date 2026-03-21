import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGE_HEADINGS } from '@/__tests__/playwright/lib/utils/constants/texts/e2eTexts'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Who I Am - Page Content', () => {
  test('renders page heading correctly', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    await expect(page.locator('h1')).toHaveText(PAGE_HEADINGS.whoIAm)
  })

  test('renders introduction section', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    await expect(page.getByTestId(DATA_TEST_IDS.page.whoIAm.introduction)).toBeVisible()
  })

  test('renders travel countries section', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    await expect(page.getByText('Countries I\u00A0Have\u00A0Visited')).toBeVisible()
  })

  test('renders South Korea section with images', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    await expect(page.getByTestId(DATA_TEST_IDS.southKorea.hiking)).toBeVisible()
    await expect(page.getByTestId(DATA_TEST_IDS.southKorea.temple)).toBeVisible()
  })
})
