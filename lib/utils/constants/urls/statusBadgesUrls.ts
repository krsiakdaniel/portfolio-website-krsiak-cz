import { StatusBadgeUrls } from '@/lib/utils/typeDefinitions/interfaces'

export const statusBadgeImgsUrls: StatusBadgeUrls = {
  JEST_TEST:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/jest.yml/badge.svg',
  PLAYWRIGHT_TEST:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/playwright.yml/badge.svg',
  CODEQL:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/github-code-scanning/codeql/badge.svg',
  PRETTIER_CHECK_FORMATTING:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/prettier-check-formatting.yml/badge.svg',
  PULL_REQUEST_LABELER:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/labeler.yml/badge.svg',
  AUTO_AUTHOR_ASSIGN:
    'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows/auto-author-assign.yml/badge.svg',
  CODE_QUALITY: 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5',
  DEPENDABOT: 'https://img.shields.io/badge/Dependabot-Enabled-green',
  NETLIFY:
    'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status',
  UPTIME: 'https://uptime.betterstack.com/status-badges/v1/monitor/8z9z.svg',
}
