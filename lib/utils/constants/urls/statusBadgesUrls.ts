import { StatusBadgeUrls } from '@/lib/utils/typeDefinitions/interfaces'

const GITHUB_WORKFLOW_URL =
  'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz/actions/workflows'

export const STATUS_BADGE_IMGS_URLS: StatusBadgeUrls = {
  jestTest: `${GITHUB_WORKFLOW_URL}/jest.yml/badge.svg`,
  playwrightTest: `${GITHUB_WORKFLOW_URL}/playwright.yml/badge.svg`,
  codeQl: `${GITHUB_WORKFLOW_URL}/github-code-scanning/codeql/badge.svg`,
  prettierCheckFormatting: `${GITHUB_WORKFLOW_URL}/prettier-check-formatting.yml/badge.svg`,
  pullRequestLabeler: `${GITHUB_WORKFLOW_URL}/labeler.yml/badge.svg`,
  autoAuthorAssign: `${GITHUB_WORKFLOW_URL}/auto-author-assign.yml/badge.svg`,
  codeQuality: 'https://app.codacy.com/project/badge/Grade/eaa72f9b0a7242ae9179b0dfdd58faf5',
  netlify:
    'https://api.netlify.com/api/v1/badges/eb322254-0169-4941-9416-3806b0bd5be6/deploy-status',
  uptime: 'https://uptime.betterstack.com/status-badges/v1/monitor/8z9z.svg',
} as const satisfies StatusBadgeUrls
