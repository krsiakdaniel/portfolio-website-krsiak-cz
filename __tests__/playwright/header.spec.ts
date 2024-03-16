import { expect, test } from '@playwright/test'

const HEADER_LOGO_SELECTOR = 'data-testid=header-logo'
const MENU_WORK_EXPERIENCE_SELECTOR = 'data-testid=desktop-work-experience-link'
const MENU_PERSONAL_PROJECTS_SELECTOR = 'data-testid=desktop-personal-projects-link'
const HOME_PAGE_PATH = '/'
const HOME_PAGE_URL = 'http://localhost:3000/'
const WORK_EXPERIENCE_PAGE_URL = `${HOME_PAGE_URL}work-experience`
const PERSONAL_PROJECTS_PAGE_URL = `${HOME_PAGE_URL}personal-projects`

test.describe('Header', () => {
  test('Logo - link', async ({ page }) => {
    // Go to home page
    await page.goto(HOME_PAGE_PATH)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(HEADER_LOGO_SELECTOR)
    expect(isLinkVisible).toBe(true)

    // Check if the link text is correct
    const linkText = await page.textContent(HEADER_LOGO_SELECTOR)
    expect(linkText).toBe('krsiak.cz')

    // Check if link is correct
    const linkUrl = await page.getAttribute(HEADER_LOGO_SELECTOR, 'href')
    expect(linkUrl).toBe(HOME_PAGE_PATH)

    // Check if the link redirects to the home page when clicked
    await page.click(HEADER_LOGO_SELECTOR)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(HOME_PAGE_URL)
  })

  test('Desktop Menu - Work Experience Link', async ({ page }) => {
    // Go to home page
    await page.goto(HOME_PAGE_PATH)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(MENU_WORK_EXPERIENCE_SELECTOR)
    expect(isLinkVisible).toBe(true)

    // Check if the link redirects to the work experience page when clicked
    await page.click(MENU_WORK_EXPERIENCE_SELECTOR)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(WORK_EXPERIENCE_PAGE_URL)

    // Check if the H1 heading on the final page has the text "Work Experience"
    const heading = await page.textContent('h1')
    expect(heading).toBe('Work Experience')
  })

  test('Desktop Menu - Personal Projects Link', async ({ page }) => {
    // Go to home page
    await page.goto(HOME_PAGE_PATH)

    // Check if the link is visible
    const isLinkVisible = await page.isVisible(MENU_PERSONAL_PROJECTS_SELECTOR)
    expect(isLinkVisible).toBe(true)

    // Check if the link redirects to the personal projects page when clicked
    await page.click(MENU_PERSONAL_PROJECTS_SELECTOR)
    await page.waitForLoadState('networkidle')
    expect(page.url()).toBe(PERSONAL_PROJECTS_PAGE_URL)

    // Check if the H1 heading on the final page has the text "Personal Projects"
    const heading = await page.textContent('h1')
    expect(heading).toBe('Personal Projects')
  })
})
