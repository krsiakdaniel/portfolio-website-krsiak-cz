import { Page, expect } from '@playwright/test'

export const testProjectLink = async (page: Page, projectPage: string, projectID: string) => {
  const pageLink = projectPage

  const projectDetailsLink = page.getByTestId(projectID)

  const linkText = await projectDetailsLink.innerText()
  expect(linkText).toContain('Project details')

  const linkUrl = await projectDetailsLink.getAttribute('href')
  expect(linkUrl).toBe(pageLink)

  await projectDetailsLink.click()

  expect(page.url()).toContain(pageLink)
}
