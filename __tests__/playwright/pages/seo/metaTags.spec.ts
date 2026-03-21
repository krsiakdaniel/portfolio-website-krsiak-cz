import { expect, test } from '@playwright/test'

import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Meta Tags - SEO', () => {
  test('home page has correct title and meta description', async ({ page }) => {
    await page.goto(PAGES_URL.home)

    await expect(page).toHaveTitle(/Daniel Kršiak/)
    const description = page.locator('meta[name="description"]')
    await expect(description).toHaveAttribute('content', /React Developer/)
  })

  test('who I am page has correct title', async ({ page }) => {
    await page.goto(PAGES_URL.whoIAm)
    await expect(page).toHaveTitle(/Who I Am/)
  })

  test('work experience page has correct title', async ({ page }) => {
    await page.goto(PAGES_URL.workExperience)
    await expect(page).toHaveTitle(/Work Experience/)
  })

  test('resume page has correct title', async ({ page }) => {
    await page.goto(PAGES_URL.resume)
    await expect(page).toHaveTitle(/Resume/)
  })

  test('personal projects page has correct title', async ({ page }) => {
    await page.goto(PAGES_URL.personalProjects)
    await expect(page).toHaveTitle(/Personal Projects/)
  })

  test('testimonials page has correct title', async ({ page }) => {
    await page.goto(PAGES_URL.testimonials)
    await expect(page).toHaveTitle(/Testimonials/)
  })
})
