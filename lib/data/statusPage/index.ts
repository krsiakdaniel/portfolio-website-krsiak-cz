import { StatusBadge } from '@/lib/utils/interfaces/interfaces'

const IMAGE_JEST_TESTS =
  'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg'
const IMAGE_PLAYWRIGHT_TESTS =
  'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg'
const IMAGE_CODEQL =
  'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg'
const IMAGE_CODE_QUALITY = 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5'
const IMAGE_DEPENDABOT = 'https://img.shields.io/badge/Dependabot-Enabled-green'
const IMAGE_NETLIFY = 'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status'

export const statusBadges: StatusBadge[] = [
  {
    id: 0,
    name: 'Jest Tests',
    src: IMAGE_JEST_TESTS,
    alt: 'Jest Tests',
    width: 132,
    height: 20,
  },
  {
    id: 1,
    name: 'Playwright Tests',
    src: IMAGE_PLAYWRIGHT_TESTS,
    alt: 'Playwright Tests',
    width: 167,
    height: 20,
  },
  {
    id: 2,
    name: 'CodeQL',
    src: IMAGE_CODEQL,
    alt: 'CodeQL',
    width: 120,
    height: 40,
  },
  {
    id: 3,
    name: 'Code Quality',
    src: IMAGE_CODE_QUALITY,
    alt: 'Code Quality',
    width: 120,
    height: 20,
  },
  {
    id: 4,
    name: 'Dependabot',
    src: IMAGE_DEPENDABOT,
    alt: 'Dependabot',
    width: 130,
    height: 20,
  },
  {
    id: 5,
    name: 'Netlify',
    src: IMAGE_NETLIFY,
    alt: 'Netlify',
    width: 118,
    height: 20,
  },
]
