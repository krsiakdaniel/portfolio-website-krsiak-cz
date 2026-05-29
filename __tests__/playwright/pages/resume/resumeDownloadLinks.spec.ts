import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { DOWNLOAD_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Resume - Download links - PDF Format', () => {
  test('should render download card PDF link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkImageResumeDownloadPDF)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', DOWNLOAD_URL.resumePDF)
  })

  test('should render download footer strip PDF correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.stripButtonResumeDownloadPDF)

    await expect(link).toBeVisible()
  })
})

test.describe('Resume - Download links - DOCX Format', () => {
  test('should render download card DOCX link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkImageResumeDownloadDOCX)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', DOWNLOAD_URL.resumeDOCX)
  })

  test('should render download footer strip DOCX correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.stripButtonResumeDownloadDOCX)

    await expect(link).toBeVisible()
  })
})
