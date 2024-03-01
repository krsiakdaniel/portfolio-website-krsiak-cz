import type { SectionItem } from '@/utils/types'

export const sections: SectionItem[] = [
  {
    title: 'My job',
    titleHighlight: '',
    items: [
      'I worked on automation, testing scripts and team coordination.',
      'Groupon is an online marketplace, offering discounts on products and services, with 17 million customers.',
    ],
  },
  {
    title: 'My role',
    titleHighlight: '',
    items: [
      'SDET = Software Development Engineer in Testing.',
      'In testing, it is an IT professional who can work equally in both development and testing.',
    ],
  },
  {
    title: 'Responsibility #1:',
    titleHighlight: 'QA Automation and Testing Scripts',
    items: [
      'Setting up automation, including Playwright for E2E.',
      'Writing E2E tests in JavaScript and TypeScript.',
      'Coordinating efforts related to unit tests and integration tests.',
      'Writing documentation for developers.',
      'CI/CD pipeline in GitHub using Jenkins, for unit, integration, and E2E tests.',
    ],
  },
  {
    title: 'Responsibility #2:',
    titleHighlight: 'Team Coordination',
    items: [
      'Involved in hiring new SDET members for QA team.',
      'Work across 4 teams.',
      '3 DEV teams (15 developers). Setting priorities for writing unit and integration tests.',
      '1 QA team (6 manual testers). Coordinating regression testing for the website.',
      'Drive the discussion and decisions on technical topics related to the teams.',
      'Keeping up-to-date JIRA tasks for testing.',
    ],
  },
]
