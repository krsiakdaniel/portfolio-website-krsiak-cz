import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Home - Featured Project Link', () => {
  test('should navigate to Smartsupp Dashboard when clicking featured project link', async ({
    page,
  }) => {
    await page.goto(PAGES_URL.home)

    // The project link uses the project ID as the data-test-id
    const featuredProjectLink = page.getByTestId('link-project-work-smartsupp-dashboard')

    await expect(featuredProjectLink).toBeVisible()
    await expect(featuredProjectLink).toHaveAttribute('href', PAGES_URL.workSmartsuppDashboard)

    await featuredProjectLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.workSmartsuppDashboard))
  })
})
