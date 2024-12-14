interface StatusBadge {
  name: string
  src: string
  alt: string
  width: number
  height: number
}

export const statusBadges: StatusBadge[] = [
  {
    name: 'Jest Tests',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg',
    alt: 'Jest Tests',
    width: 132,
    height: 20,
  },
  {
    name: 'Playwright Tests',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg',
    alt: 'Playwright Tests',
    width: 167,
    height: 20,
  },
  {
    name: 'CodeQL',
    src: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg',
    alt: 'CodeQL',
    width: 120,
    height: 40,
  },
  {
    name: 'Code Quality',
    src: 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5',
    alt: 'Code Quality',
    width: 120,
    height: 20,
  },
  {
    name: 'Dependabot',
    src: 'https://img.shields.io/badge/Dependabot-Enabled-green',
    alt: 'Dependabot',
    width: 130,
    height: 20,
  },
  {
    name: 'Netlify',
    src: 'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status',
    alt: 'Netlify',
    width: 118,
    height: 20,
  },
]
