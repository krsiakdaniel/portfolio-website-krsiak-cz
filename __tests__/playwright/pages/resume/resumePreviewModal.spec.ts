import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Resume - Preview button - PDF', () => {
  test('should render the PDF preview button', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const button = page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewPDF)

    await expect(button).toBeVisible()
  })

  test('should open the preview dialog when PDF preview button is clicked', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    await page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewPDF).click()

    const dialog = page.getByTestId(DATA_TEST_IDS.resume.previewDialog)

    await expect(dialog).toBeVisible()
  })
})

test.describe('Resume - Preview button - DOCX', () => {
  test('should render the DOCX preview button', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const button = page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewDOCX)

    await expect(button).toBeVisible()
  })

  test('should open the preview dialog when DOCX preview button is clicked', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    await page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewDOCX).click()

    const dialog = page.getByTestId(DATA_TEST_IDS.resume.previewDialog)

    await expect(dialog).toBeVisible()
  })
})

test.describe('Resume - Preview modal - Fullscreen', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    await page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewPDF).click()
    await expect(page.getByTestId(DATA_TEST_IDS.resume.previewDialog)).toBeVisible()
  })

  test('should render the fullscreen button inside the modal', async ({ page }) => {
    const button = page.getByTestId(DATA_TEST_IDS.resume.previewButtonFullscreen)

    await expect(button).toBeVisible()
    await expect(button).toHaveAttribute('aria-label', 'Enter fullscreen')
  })

  test('should toggle to fullscreen when fullscreen button is clicked', async ({ page }) => {
    const button = page.getByTestId(DATA_TEST_IDS.resume.previewButtonFullscreen)
    await button.click()

    await expect(button).toHaveAttribute('aria-label', 'Exit fullscreen')
  })

  test('should exit fullscreen when fullscreen button is clicked again', async ({ page }) => {
    const button = page.getByTestId(DATA_TEST_IDS.resume.previewButtonFullscreen)
    await button.click()
    await button.click()

    await expect(button).toHaveAttribute('aria-label', 'Enter fullscreen')
  })
})

test.describe('Resume - Preview modal - Close', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    await page.getByTestId(DATA_TEST_IDS.resume.buttonPreviewPDF).click()
    await expect(page.getByTestId(DATA_TEST_IDS.resume.previewDialog)).toBeVisible()
  })

  test('should render the close button inside the modal', async ({ page }) => {
    const button = page.getByTestId(DATA_TEST_IDS.resume.previewButtonClose)

    await expect(button).toBeVisible()
    await expect(button).toHaveAttribute('aria-label', 'Close preview')
  })

  test('should close the modal when the close button is clicked', async ({ page }) => {
    await page.getByTestId(DATA_TEST_IDS.resume.previewButtonClose).click()

    const dialog = page.getByTestId(DATA_TEST_IDS.resume.previewDialog)

    await expect(dialog).not.toBeVisible()
  })
})
