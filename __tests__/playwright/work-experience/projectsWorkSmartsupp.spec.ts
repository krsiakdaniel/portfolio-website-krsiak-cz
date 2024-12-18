import { PAGES_URL } from '@/utils/constants/pageUrls'
import { expect, test } from '@playwright/test'

test.describe('Projects Work - Smartsupp', () => {
  test('Dashboard - Link', async ({ page }) => {
    await test.step('Go to Dashboard page', async () => {
      await page.goto(`${PAGES_URL.work.smartsupp.dashboard}`)
    })

    await test.step('Check Dashboard Website link', async () => {
      const link = page.getByRole('link', { name: 'Website →' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://www.smartsupp.com/live-chat-for-customer-care-teams/'
      expect(href).toBe(expectedUrl)
    })
  })

  test('Web - Link', async ({ page }) => {
    await test.step('Go to Web page', async () => {
      await page.goto(`${PAGES_URL.work.smartsupp.web}`)
    })

    await test.step('Check Web Website link', async () => {
      const link = page.getByRole('link', { name: 'Website →' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://www.smartsupp.com/'
      expect(href).toBe(expectedUrl)
    })
  })

  test('HELP - Link', async ({ page }) => {
    await test.step('Go to HELP page', async () => {
      await page.goto(`${PAGES_URL.work.smartsupp.help}`)
    })

    await test.step('Check HELP Website link', async () => {
      const link = page.getByRole('link', { name: 'Website →' })
      const href = await link.getAttribute('href')
      const expectedUrl = 'https://help.smartsupp.com/'
      expect(href).toBe(expectedUrl)
    })
  })
})
