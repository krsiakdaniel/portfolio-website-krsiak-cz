import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Gallery - Thumbnail Interaction', () => {
  test('renders gallery with thumbnails on Smartsupp Dashboard', async ({ page }) => {
    await page.goto(PAGES_URL.workSmartsuppDashboard)
    const gallery = page.getByTestId(DATA_TEST_IDS.gallery)

    await expect(gallery).toBeVisible()

    const thumbnails = gallery.locator('[data-testid^="gallery-image-"]')
    const count = await thumbnails.count()
    expect(count).toBeGreaterThan(1)
  })

  test('changes active image when clicking a thumbnail', async ({ page }) => {
    await page.goto(PAGES_URL.workSmartsuppDashboard)
    const preview = page.getByTestId(DATA_TEST_IDS.galleryPreview.activeImage)

    const initialLabel = await preview.getAttribute('aria-label')

    const secondThumbnail = page.getByTestId('gallery-image-1')
    await secondThumbnail.click()

    await expect(preview).not.toHaveAttribute('aria-label', initialLabel!)
  })

  test('thumbnail shows pressed state for active image', async ({ page }) => {
    await page.goto(PAGES_URL.workSmartsuppDashboard)

    const firstThumbnail = page.getByTestId('gallery-image-0')
    await expect(firstThumbnail).toHaveAttribute('aria-pressed', 'true')

    const secondThumbnail = page.getByTestId('gallery-image-1')
    await expect(secondThumbnail).toHaveAttribute('aria-pressed', 'false')

    await secondThumbnail.click()
    await expect(secondThumbnail).toHaveAttribute('aria-pressed', 'true')
    await expect(firstThumbnail).toHaveAttribute('aria-pressed', 'false')
  })
})
