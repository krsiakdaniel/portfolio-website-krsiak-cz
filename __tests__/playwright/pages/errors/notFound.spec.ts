import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('404 Not Found Page', () => {
  test('renders correctly for an invalid URL', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist')
    expect(response?.status()).toBe(404)

    await expect(page.getByTestId(DATA_TEST_IDS.errorPage.heading)).toContainText('404')
    await expect(page.getByTestId(DATA_TEST_IDS.errorPage.description)).toBeVisible()
  })

  test('has a back to home link that navigates home', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    const backLink = page.getByTestId(DATA_TEST_IDS.errorPage.backToHomeLink)

    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', PAGES_URL.home)

    await backLink.click()
    await expect(page).toHaveURL(new RegExp(`${PAGES_URL.home}$`))
  })
})
