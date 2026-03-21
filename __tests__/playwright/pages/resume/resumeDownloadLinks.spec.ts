import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EXTERNAL_URL, PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Resume - Download links - PDF Format', () => {
  test('should render image download PDF link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkImageResumeDownloadPDF)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.resumeViewPDF)
  })

  test('should render button download PDF link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkButtonResumeDownloadPDF)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.resumeViewPDF)
  })
})

test.describe('Resume - Download links - DOCX Format', () => {
  test('should render image download DOCX link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkImageResumeDownloadDOCX)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.resumeViewDOCX)
  })

  test('should render button download DOCX link correctly', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    const link = page.getByTestId(DATA_TEST_IDS.resume.linkButtonResumeDownloadDOCX)

    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', EXTERNAL_URL.resumeViewDOCX)
  })
})
