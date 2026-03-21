import { type Locator, type Page, expect } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const DESKTOP_VIEWPORT = { width: 1280, height: 720 }

const ACTIVE_CLASSES = {
  BACKGROUND: 'bg-violet-100',
  TEXT: 'text-violet-900',
}

export class HeaderPage {
  readonly page: Page
  readonly logo: Locator
  readonly desktopLinks: {
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
    this.logo = page.getByTestId(DATA_TEST_IDS.headerLogo)

    this.desktopLinks = {
      whoIAm: page.getByTestId(DATA_TEST_IDS.menu.desktop.links.whoIAm),
      workExperience: page.getByTestId(DATA_TEST_IDS.menu.desktop.links.workExperience),
      resume: page.getByTestId(DATA_TEST_IDS.menu.desktop.links.resume),
      personalProjects: page.getByTestId(DATA_TEST_IDS.menu.desktop.links.personalProjects),
      testimonials: page.getByTestId(DATA_TEST_IDS.menu.desktop.links.testimonials),
    }

    this.socialLinks = {
      gitHub: page.getByTestId(`desktop-${DATA_TEST_IDS.menu.socialLinks.gitHubRepo}`),
      linkedIn: page.getByTestId(`desktop-${DATA_TEST_IDS.menu.socialLinks.linkedInProfile}`),
    }
  }

  async setDesktopViewport() {
    await this.page.setViewportSize(DESKTOP_VIEWPORT)
  }

  async navigateViaDesktopLink(link: Locator, expectedPath: string) {
    await link.click()
    await this.page.waitForURL(`**${expectedPath}`)
  }

  async expectMenuItemActive(locator: Locator) {
    await expect(locator).toHaveAttribute('aria-current', 'page')
    await expect(locator).toHaveClass(new RegExp(ACTIVE_CLASSES.BACKGROUND))
    await expect(locator).toHaveClass(new RegExp(ACTIVE_CLASSES.TEXT))
  }

  async expectMenuItemInactive(locator: Locator) {
    const ariaCurrent = await locator.getAttribute('aria-current')
    expect(ariaCurrent).not.toBe('page')
  }
}
