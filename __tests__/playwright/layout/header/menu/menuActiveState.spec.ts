import type { Locator } from '@playwright/test'
import { expect, test } from '@playwright/test'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { getDataTestId } from '@/__tests__/playwright/lib/utils/helpers/getDataTestId'

// Constants
const VIEWPORTS = {
  DESKTOP: { width: 1280, height: 720 },
  MOBILE: { width: 375, height: 812 },
}

const ACTIVE_CLASSES = {
  BACKGROUND: 'bg-violet-100',
  TEXT: 'text-violet-900',
}

// Helper functions
async function expectMenuItemActive(locator: Locator, isActive = true) {
  const classes = await locator.getAttribute('class')
  const ariaCurrent = await locator.getAttribute('aria-current')

  if (isActive) {
    expect(classes).toContain(ACTIVE_CLASSES.BACKGROUND)
    expect(classes).toContain(ACTIVE_CLASSES.TEXT)
    expect(ariaCurrent).toBe('page')
  } else {
    expect(classes).not.toContain(ACTIVE_CLASSES.BACKGROUND)
    expect(classes).not.toContain(ACTIVE_CLASSES.TEXT)
    expect(ariaCurrent).not.toBe('page')
  }
}

test.describe('Menu Active State', () => {
  test.describe('Desktop Menu', () => {
    test.beforeEach(async ({ page }) => {
      // Set viewport to desktop size to ensure desktop menu is visible
      await page.setViewportSize(VIEWPORTS.DESKTOP)
    })

    test('should show active state on home page', async ({ page }) => {
      await page.goto('/')

      // Check that home is not explicitly in the menu (it's just the logo)
      // But no menu item should have active styling on home page
      const menuItems = page.locator('[data-testid^="desktop-"][data-testid$="-link"]')
      const count = await menuItems.count()

      for (let i = 0; i < count; i++) {
        const item = menuItems.nth(i)
        await expectMenuItemActive(item, false)
      }
    })

    test('should show active state on who-i-am page', async ({ page }) => {
      await page.goto('/who-i-am')

      const whoIAmLink = page.locator(getDataTestId(DATA_TEST_IDS.menu.desktop.links.whoIAm))

      // Check that who-i-am link has active styling
      await expectMenuItemActive(whoIAmLink, true)
    })

    test('should show active state on work-experience main page', async ({ page }) => {
      await page.goto('/work-experience')

      const workExperienceLink = page.locator(
        getDataTestId(DATA_TEST_IDS.menu.desktop.links.workExperience),
      )

      // Check that work-experience link has active styling
      await expectMenuItemActive(workExperienceLink, true)
    })

    test('should show active state on work-experience child page', async ({ page }) => {
      await page.goto('/work-experience/smartsupp-web')

      const workExperienceLink = page.locator(
        getDataTestId(DATA_TEST_IDS.menu.desktop.links.workExperience),
      )

      // Check that work-experience link has active styling even on child page
      await expectMenuItemActive(workExperienceLink, true)
    })

    test('should show only one active menu item at a time', async ({ page }) => {
      await page.goto('/resume')

      const menuItems = page.locator('[data-testid^="desktop-"][data-testid$="-link"]')
      const count = await menuItems.count()
      let activeCount = 0

      for (let i = 0; i < count; i++) {
        const item = menuItems.nth(i)
        const classes = await item.getAttribute('class')
        if (
          classes?.includes(ACTIVE_CLASSES.BACKGROUND) &&
          classes?.includes(ACTIVE_CLASSES.TEXT)
        ) {
          activeCount++
        }
      }

      // Should have exactly one active menu item
      expect(activeCount).toBe(1)

      // And it should be the resume link
      const resumeLink = page.locator(getDataTestId(DATA_TEST_IDS.menu.desktop.links.resume))
      await expectMenuItemActive(resumeLink, true)
    })
  })

  test.describe('Mobile Menu', () => {
    test.beforeEach(async ({ page }) => {
      // Set viewport to mobile size
      await page.setViewportSize(VIEWPORTS.MOBILE)
    })

    test('should show active state in mobile menu', async ({ page }) => {
      await page.goto('/testimonials')

      // Open mobile menu
      await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

      const testimonialsLink = page.locator(
        getDataTestId(DATA_TEST_IDS.menu.mobile.links.testimonials),
      )

      // Check that testimonials link has active styling
      await expectMenuItemActive(testimonialsLink, true)
    })

    test('should maintain active state after navigation', async ({ page }) => {
      await page.goto('/personal-projects')

      // Open mobile menu
      await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

      // Click on work experience
      await page.click(getDataTestId(DATA_TEST_IDS.menu.mobile.links.workExperience))

      // Wait for navigation
      await page.waitForURL('**/work-experience')

      // Open mobile menu again
      await page.click(getDataTestId(DATA_TEST_IDS.menu.toggle.component))

      const workExperienceLink = page.locator(
        getDataTestId(DATA_TEST_IDS.menu.mobile.links.workExperience),
      )

      // Check that work-experience link now has active styling
      await expectMenuItemActive(workExperienceLink, true)
    })
  })
})
