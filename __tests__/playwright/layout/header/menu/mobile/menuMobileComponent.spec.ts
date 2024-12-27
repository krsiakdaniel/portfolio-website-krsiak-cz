import { Browser, BrowserContext, chromium, expect, Page, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

import { ID } from '@/lib/utils/constants/ids/elementIds'

let browser: Browser
let context: BrowserContext
let page: Page

test.beforeAll(async () => {
  browser = await chromium.launch()
  context = await browser.newContext({ viewport: { width: 375, height: 812 } })
  page = await context.newPage()
})

test.beforeEach(async () => {
  // Set the viewport size to a smaller size to simulate a mobile device
  await page.setViewportSize({ width: 375, height: 812 })

  // Go to the home page
  await test.step('Go to home page', async () => {
    await page.goto('/')
  })
})

test.afterAll(async () => {
  await browser.close()
})

test.describe('Menu Mobile - Component', () => {
  test('renders the mobile menu', async () => {
    // Click on the menu toggle to open the mobile menu
    await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

    // Select the mobile menu component
    const menu = await page.$(getDataTestId(DATA_TEST_IDS.menu.mobile.componentMenu))

    // Assert that the menu component exists
    expect(menu).toBeTruthy()

    // If the menu component exists, check its 'id' attribute
    if (menu) {
      expect(await menu.getAttribute('id')).toBe(ID.menu.mobile)
    }
  })

  test('closes the mobile menu and ensures it is not visible', async () => {
    // Click on the menu toggle to open the mobile menu
    await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

    // Select the mobile menu component
    const menu = await page.$(getDataTestId(DATA_TEST_IDS.menu.mobile.componentMenu))

    // Assert that the menu component exists
    expect(menu).toBeTruthy()

    // Click on the menu toggle again to close the mobile menu
    await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

    // Assert that the menu component is not visible
    expect(await menu?.isVisible()).toBeFalsy()
  })
})
