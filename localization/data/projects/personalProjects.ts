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
  koreanEasy: {
    title: 'Description',
    titleHighlight: '',
    items: [
      {
        text: 'Korean language learning app featuring interactive study tools centered around teaching Korean (Hangeul) to English speakers.',
      },
      {
        text: 'Alphabet table with font preview, stroke order diagrams, audio wave pronunciation, and word examples for each letter.',
      },
      {
        text: 'Syllables table showing how Korean consonants and vowels combine to form syllable blocks.',
      },
      {
        text: 'Alphabet flash cards with the letter and illustration on the front, and its meaning revealed on the back.',
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
  koreanEasy: {
    title: 'Korean Easy',
    company: 'Personal project',
    role: `Front End ${EM_DASH}\u00A0Next.js`,
    description:
      'Korean language learning app with alphabet, spaced repetition, dictionary and loanwords, teaching Hangeul to\u00A0English speakers.',
    linkText: 'Project details',
    projectLinks: [
      {
        urlText: 'Website',
        url: PROJECTS_PERSONAL_URLS.personalKoreanEasyExternal,
        dataTestId: DATA_TEST_IDS.links.KOREAN_EASY,
      },
    ],
    personalProjectNote: 'Commercial product\u00A0— private GitHub repo.',
    linkProjectPage: PAGES_URL.personalKoreanEasy,
  },
}
