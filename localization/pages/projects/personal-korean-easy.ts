import { EM_DASH } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_PERSONAL_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

export const PROJECTS_PERSONAL_KOREAN_EASY = {
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
}

export const PROJECTS_PERSONAL_KOREAN_EASY_OVERVIEW = {
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
}
