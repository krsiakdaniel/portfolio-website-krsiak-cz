import { StatusBadgeUrls } from '@/lib/utils/typeDefinitions/interfaces'

export const statusBadgeImgsUrls: StatusBadgeUrls = {
  JEST: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg',
  PLAYWRIGHT: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg',
  CODEQL:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg',
  CODE_QUALITY: 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5',
  DEPENDABOT: 'https://img.shields.io/badge/Dependabot-Enabled-green',
  NETLIFY: 'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status',
}
