import { NB_HYPHEN } from '@/lib/utils/constants/specialCharacters'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { PROJECTS_WORK_URLS } from '@/lib/utils/constants/urls/projectsUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { CUSTOMERS_COUNT } from '../../constants/customers'

export const PROJECTS_WORK_GROUPON = {
  sections: {
    responsibility: {
      title: 'My Job',
      items: [
        'I\u00A0worked on\u00A0automation, testing scripts and\u00A0team coordination.',
        `Groupon is\u00A0an\u00A0online marketplace, offering discounts on\u00A0products and\u00A0services, with ${CUSTOMERS_COUNT.groupon} customers.`,
      ],
    },
    role: {
      title: 'My role',
      items: [
        'SDET =\u00A0Software Development Engineer in\u00A0Testing.',
        'In\u00A0testing, it\u00A0is\u00A0an\u00A0IT\u00A0professional who can work equally in\u00A0both development and\u00A0testing.',
      ],
    },
    automation: {
      title: 'Responsibility\u00A0#1:',
      titleHighlight: 'QA\u00A0Automation and\u00A0Testing\u00A0Scripts',
      items: [
        'Setting up\u00A0automation, including Playwright for\u00A0E2E.',
        'Writing E2E tests in\u00A0JavaScript and\u00A0TypeScript.',
        'Coordinating efforts related to\u00A0unit tests and\u00A0integration tests.',
        'Writing documentation for\u00A0developers.',
        'CI/CD pipeline in\u00A0GitHub using Jenkins, for\u00A0unit, integration, and\u00A0E2E tests.',
      ],
    },
    coordination: {
      title: 'Responsibility\u00A0#2:',
      titleHighlight: 'Team Coordination',
      items: [
        'Involved in\u00A0hiring new SDET members for\u00A0QA\u00A0team.',
        'Work across 4\u00A0teams.',
        '3\u00A0DEV teams (15\u00A0developers). Setting priorities for\u00A0writing unit and\u00A0integration tests.',
        '1\u00A0QA team (6\u00A0manual testers). Coordinating regression testing for\u00A0the\u00A0website.',
        'Drive the\u00A0discussion and\u00A0decisions on\u00A0technical topics related to\u00A0the\u00A0teams.',
        'Keeping up-to-date JIRA tasks for\u00A0testing.',
      ],
    },
  },
}

export const PROJECTS_WORK_GROUPON_OVERVIEW = {
  title: `E${NB_HYPHEN}Commerce ${NB_HYPHEN}\u00A0Marketplace`,
  company: 'Groupon',
  role: `QA\u00A0Automation ${NB_HYPHEN}\u00A0Team\u00A0Leader`,
  years: '4 months',
  description:
    'I\u00A0was responsible for\u00A0setting up\u00A0a\u00A0new QA\u00A0team, hiring and\u00A0managing people. Setting up\u00A0QA\u00A0processes, writing test plans, and\u00A0testing scripts.',
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: PROJECTS_WORK_URLS.workGrouponExternal,
      dataTestId: DATA_TEST_IDS.links.GROUPON,
    },
  ],
  customers: `${CUSTOMERS_COUNT.groupon}`,
  linkProjectPage: PAGES_URL.workGroupon,
}
