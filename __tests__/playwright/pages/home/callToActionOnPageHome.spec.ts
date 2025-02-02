import { setupPage } from '@/__tests__/playwright/lib/utils/helpers/setup'
import { expect, test } from '@playwright/test'

test.describe('CTA - Home - Work, Resume', () => {
  test('should render the Work Experience CTA link correctly', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await setupPage(context, '/')

    const linkWorkExperience = page.getByTestId('call-to-action-link-work-experience')
    expect(await linkWorkExperience.isVisible()).toBe(true)
    expect(await linkWorkExperience.getAttribute('href')).toBe('/work-experience')

    await context.close()
  })

  test('should render the Resume CTA link correctly', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await setupPage(context, '/')

    const linkResume = page.getByTestId('call-to-action-link-resume')
    expect(await linkResume.isVisible()).toBe(true)
    expect(await linkResume.getAttribute('href')).toBe('/resume')

    await context.close()
  })

  test('should render the LinkedIn photo inside the CTA correctly', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await setupPage(context, '/')

    const linkedInPhoto = page.getByTestId('linkedin-photo')
    expect(await linkedInPhoto.isVisible()).toBe(true)

    await context.close()
  })
})
