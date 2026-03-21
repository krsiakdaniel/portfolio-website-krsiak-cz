import { expect, test } from '@playwright/test'

import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'

import {
  PAGES_URL,
  PROJECTS_WORK_URLS,
} from '@/__tests__/playwright/lib/utils/constants/urls/e2eUrls'

test.describe('Project - Komercni Banka', () => {
  test('Links', async ({ page }) => {
    await page.goto(PAGES_URL.workKomercniBanka)

    await test.step('Branches & ATMs link', async () => {
      const link = page.getByRole('link', { name: 'Branches &\u00A0ATMs', exact: true })
      await expect(link).toHaveAttribute(
        'href',
        PROJECTS_WORK_URLS.workKomercniBankaBranchesAndAtmsExternal,
      )
    })

    await test.step('Branches & ATMs - Details link', async () => {
      const link = page.getByRole('link', {
        name: `Branches &\u00A0ATMs ${NB_HYPHEN}\u00A0Details`,
        exact: true,
      })
      await expect(link).toHaveAttribute(
        'href',
        PROJECTS_WORK_URLS.workKomercniBankaBranchesDetailsExternal,
      )
    })

    await test.step('Exchange Rates link', async () => {
      const link = page.getByRole('link', { name: 'Exchange Rates', exact: true })
      await expect(link).toHaveAttribute(
        'href',
        PROJECTS_WORK_URLS.workKomercniBankaExchangeRatesExternal,
      )
    })

    await test.step('Exchange Rates - Details link', async () => {
      const link = page.getByRole('link', {
        name: `Exchange Rates ${NB_HYPHEN}\u00A0Details`,
        exact: true,
      })
      await expect(link).toHaveAttribute(
        'href',
        PROJECTS_WORK_URLS.workKomercniBankaExchangeDetailsExternal,
      )
    })
  })
})
