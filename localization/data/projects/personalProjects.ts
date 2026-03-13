import { EM_DASH } from '@/lib/utils/constants/specialCharacters'
import { GITHUB_URLS } from '@/lib/utils/constants/urls/githubUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_PERSONAL_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

export const PROJECTS_PERSONAL = {
  krsiak: {
    title: 'Description',
    titleHighlight: '',
    items: [
      {
        text: 'I\u00A0needed a\u00A0new website for\u00A0my personal presentation. I\u00A0learned Next.js, and\u00A0used Tailwind CSS.',
      },
    ],
  },
  cryptoMania: {
    title: 'Description',
    titleHighlight: '',
    items: [
      {
        text: 'This site was created to\u00A0display cryptocurrencies with the\u00A0ability to\u00A0search for\u00A0them and\u00A0display their current value.',
      },
    ],
  },
}

export const PROJECTS_PERSONAL_OVERVIEW = {
  next: {
    title: 'Portfolio Website',
    company: 'Personal project',
    role: `Front End ${EM_DASH}\u00A0Next.js`,
    description: `
      Personal portfolio website with my\u00A0work and\u00A0skills as\u00A0a\u00A0React\u00A0Developer.
      It\u00A0features production-level code that I\u00A0write.`,
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_PERSONAL_URLS.personalKrsiakExternal,
        dataTestId: DATA_TEST_IDS.links.KRSIAK,
      },
    ],
    linkGitHub: GITHUB_URLS.portfolioWebsiteKrsiak,
    personalProjectNote: 'My main coding project.',
    linkProjectPage: PAGES_URL.personalKrsiak,
  },
  react: {
    title: 'CryptoMania',
    company: 'Personal project',
    role: `Front End ${EM_DASH}\u00A0React`,
    description:
      'Crypto currency prices app fetching latest data from CoinGecko\u00A0API. Simple project in\u00A0Chakra\u00A0UI with dark mode.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_PERSONAL_URLS.personalCryptoManiaExternal,
        dataTestId: DATA_TEST_IDS.links.CRYPTOMANIA,
      },
    ],
    linkGitHub: GITHUB_URLS.cryptoMania,
    personalProjectNote: 'Project to\u00A0exercise coding.',
    linkProjectPage: PAGES_URL.personalCryptoMania,
  },
}
