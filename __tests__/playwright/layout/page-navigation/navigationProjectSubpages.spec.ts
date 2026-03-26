import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { PAGES_URL } from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

test.describe('Navigation - Work Project Subpages', () => {
  test('Smartsupp Dashboard: navigates to next (Komercni Banka)', async ({ page }) => {
    await page.goto(PAGES_URL.workSmartsuppDashboard)

    const nextLink = page.locator(
      getDataTestId(DATA_TEST_IDS.projects.work.smartsupp.dashboard.next),
    )
    await expect(nextLink).toBeVisible()
    await nextLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.workKomercniBanka))
  })

  test('Komercni Banka: navigates to next (Kooperativa)', async ({ page }) => {
    await page.goto(PAGES_URL.workKomercniBanka)

    const nextLink = page.locator(getDataTestId(DATA_TEST_IDS.projects.work.komercniBanka.next))
    await expect(nextLink).toBeVisible()
    await nextLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.workKooperativa))
  })

  test('Groupon: navigates to next (Moravia)', async ({ page }) => {
    await page.goto(PAGES_URL.workGroupon)

    const nextLink = page.locator(getDataTestId(DATA_TEST_IDS.projects.work.groupon.next))
    await expect(nextLink).toBeVisible()
    await nextLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.workMoravia))
  })
})

test.describe('Navigation - Personal Project Subpages', () => {
  test('Korean Easy: navigates to next (Portfolio Website)', async ({ page }) => {
    await page.goto(PAGES_URL.personalKoreanEasy)

    const nextLink = page.locator(getDataTestId(DATA_TEST_IDS.projects.personal.koreanEasy.next))
    await expect(nextLink).toBeVisible()
    await nextLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.personalKrsiak))
  })

  test('Portfolio Website: navigates to next (Cryptomania)', async ({ page }) => {
    await page.goto(PAGES_URL.personalKrsiak)

    const nextLink = page.locator(getDataTestId(DATA_TEST_IDS.projects.personal.krsiak.next))
    await expect(nextLink).toBeVisible()
    await nextLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.personalCryptoMania))
  })

  test('Cryptomania: navigates to previous (Portfolio Website)', async ({ page }) => {
    await page.goto(PAGES_URL.personalCryptoMania)

    const prevLink = page.locator(
      getDataTestId(DATA_TEST_IDS.projects.personal.cryptoMania.previous),
    )
    await expect(prevLink).toBeVisible()
    await prevLink.click()
    await expect(page).toHaveURL(new RegExp(PAGES_URL.personalKrsiak))
  })
})
