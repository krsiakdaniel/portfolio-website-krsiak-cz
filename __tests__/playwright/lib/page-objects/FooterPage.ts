import { type Locator, type Page, expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

export class FooterPage {
  readonly page: Page
  readonly footer: Locator
  readonly copyright: Locator
  readonly homeLink: Locator
  readonly statusLink: Locator

  constructor(page: Page) {
    this.page = page
    this.footer = page.locator('#footer')
    this.copyright = page.getByTestId(DATA_TEST_IDS.footer.copyright)
    this.homeLink = page.getByTestId(DATA_TEST_IDS.footer.linkFooterHome)
    this.statusLink = page.getByTestId(DATA_TEST_IDS.footer.status)
  }

  async expectFooterVisible() {
    await expect(this.footer).toBeVisible()
  }

  async expectCopyrightContainsCurrentYear() {
    const currentYear = new Date().getFullYear().toString()
    await expect(this.copyright).toContainText(currentYear)
  }
}
