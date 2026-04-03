import { COMMON_VALUES } from '@/localization/ui/common'

export const STATUS = {
  text: 'Status',
  linkText: 'status.krsiak.cz',
  heading: {
    ciCd: 'CI & CD',
    uptimeMonitoring: 'Uptime Monitoring',
  },
  description: {
    ciCd: 'Current status of\u00A0integration and\u00A0deployment pipelines.',
    uptimeMonitoring: 'Page monitoring the website uptime.',
  },
}

export const STATUS_INTRODUCTION = {
  text: {
    showing: 'Showing the\u00A0health\u00A0and',
    performance: 'performance',
    of: 'of\u00A0the',
    project: 'project',
    integrations: 'integrations and\u00A0workflows.',
  },
}

export const META_STATUS = {
  title: `Status | ${COMMON_VALUES.nameDanielKrsiak} — ${COMMON_VALUES.reactDeveloper}`,
  description:
    'Status page with badges for Jest, Playwright, CodeQL, Code Quality, Netlify—track test coverage and automation.',
  keywords: {
    nameDanielKrsiak: COMMON_VALUES.nameDanielKrsiak,
    reactDeveloper: COMMON_VALUES.reactDeveloper,
    status: 'Status',
    projectBadges: 'Project badges',
    jestTests: 'Jest Tests',
    playwrightTests: 'Playwright Tests',
    codeQl: 'CodeQL',
    codeQuality: 'Code Quality',
    netlify: 'Netlify',
  },
}
