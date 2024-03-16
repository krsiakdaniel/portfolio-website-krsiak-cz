import { expect, test } from '@playwright/test'

const Selectors = {
  HEADER_LOGO: 'data-testid=header-logo',
  MENU_WORK_EXPERIENCE: 'data-testid=desktop-work-experience-link',
  MENU_PERSONAL_PROJECTS: 'data-testid=desktop-personal-projects-link',
  MENU_ABOUT_ME: 'data-testid=desktop-about-me-link',
}

const Paths = {
  HOME: '/',
  HOME_PAGE_URL: 'http://localhost:3000/',
  WORK_EXPERIENCE: 'http://localhost:3000/work-experience',
  PERSONAL_PROJECTS: 'http://localhost:3000/personal-projects',
  ABOUT_ME: 'http://localhost:3000/about-me',
}

test.describe('Header', () => {
  test('Logo - link', async ({ page }) => {
    // Go to home page
    await page.goto(Paths.HOME)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(Selectors.HEADER_LOGO)
    expect(isLinkVisible).toBe(true)

    // Check if the link text is correct
    const linkText = await page.textContent(Selectors.HEADER_LOGO)
    expect(linkText).toBe('krsiak.cz')

    // Check if link is correct
    const linkUrl = await page.getAttribute(Selectors.HEADER_LOGO, 'href')
    expect(linkUrl).toBe(Paths.HOME)

    // Check if the link redirects to the home page when clicked
    await page.click(Selectors.HEADER_LOGO)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(Paths.HOME_PAGE_URL)
  })

  test('Desktop Menu - About Me Link', async ({ page }) => {
    // Go to home page
    await page.goto(Paths.HOME)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(Selectors.MENU_ABOUT_ME)
    expect(isLinkVisible).toBe(true)

    // Check if the link redirects to the about me page when clicked
    await page.click(Selectors.MENU_ABOUT_ME)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(Paths.ABOUT_ME)

    // Check if the H1 heading on the final page has the text "About Me"
    const heading = await page.textContent('h1')
    expect(heading).toBe('👨‍💻 About Me')
  })

  test('Desktop Menu - Work Experience Link', async ({ page }) => {
    // Go to home page
    await page.goto(Paths.HOME)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(Selectors.MENU_WORK_EXPERIENCE)
    expect(isLinkVisible).toBe(true)

    // Check if the link redirects to the work experience page when clicked
    await page.click(Selectors.MENU_WORK_EXPERIENCE)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(Paths.WORK_EXPERIENCE)

    // Check if the H1 heading on the final page has the text "Work Experience"
    const heading = await page.textContent('h1')
    expect(heading).toBe('🖥️ Work Experience')
  })

  test('Desktop Menu - Personal Projects Link', async ({ page }) => {
    // Go to home page
    await page.goto(Paths.HOME)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(Selectors.MENU_PERSONAL_PROJECTS)
    expect(isLinkVisible).toBe(true)

    // Check if the link redirects to the personal projects page when clicked
    await page.click(Selectors.MENU_PERSONAL_PROJECTS)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(Paths.PERSONAL_PROJECTS)

    // Check if the H1 heading on the final page has the text "Personal Projects"
    const heading = await page.textContent('h1')
    expect(heading).toBe('🚀 Personal Projects')
  })
})
