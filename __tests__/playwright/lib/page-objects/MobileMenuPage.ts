import { type Locator, type Page, expect } from '@playwright/test'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const MOBILE_VIEWPORT = { width: 375, height: 812 }

export class MobileMenuPage {
  readonly page: Page
  readonly toggleButton: Locator
  readonly menuComponent: Locator
  readonly links: {
    whoIAm: Locator
    workExperience: Locator
    resume: Locator
    personalProjects: Locator
    testimonials: Locator
  }
  readonly socialLinks: {
    gitHub: Locator
    linkedIn: Locator
  }

  constructor(page: Page) {
    this.page = page
    this.toggleButton = page.getByTestId(DATA_TEST_IDS.menu.toggle.component)
    this.menuComponent = page.getByTestId(DATA_TEST_IDS.menu.mobile.componentMenu)

    this.links = {
      whoIAm: page.getByTestId(DATA_TEST_IDS.menu.mobile.links.whoIAm),
      workExperience: page.getByTestId(DATA_TEST_IDS.menu.mobile.links.workExperience),
      resume: page.getByTestId(DATA_TEST_IDS.menu.mobile.links.resume),
      personalProjects: page.getByTestId(DATA_TEST_IDS.menu.mobile.links.personalProjects),
      testimonials: page.getByTestId(DATA_TEST_IDS.menu.mobile.links.testimonials),
    }

    this.socialLinks = {
      gitHub: page.getByTestId(`mobile-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`),
      linkedIn: page.getByTestId(`mobile-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`),
    }
  }

  async setMobileViewport() {
    await this.page.setViewportSize(MOBILE_VIEWPORT)
  }

  async openMenu() {
    await this.toggleButton.waitFor({ state: 'visible' })
    await this.toggleButton.click()
    await expect(this.menuComponent).toBeVisible()
  }

  async closeMenu() {
    await this.toggleButton.click()
    await expect(this.menuComponent).not.toBeVisible()
  }

  async expectMenuHasCorrectId() {
    await expect(this.menuComponent).toHaveId(ID.menu.mobile)
  }

  async navigateViaLink(link: Locator, expectedPath: string) {
    await link.click()
    await this.page.waitForURL(`**${expectedPath}`)
  }
}
