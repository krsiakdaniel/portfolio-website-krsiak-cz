import { TEXT } from '@/localization/english'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: TEXT.myJob,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: 'I worked on automation, testing scripts and team coordination.',
      },
      {
        id: '0-1',
        text: 'Groupon is an online marketplace, offering discounts on products and services, with 17 million customers.',
      },
    ],
  },
  {
    id: 1,
    title: 'My role',
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: 'SDET = Software Development Engineer in Testing.',
      },
      {
        id: '1-1',
        text: 'In testing, it is an IT professional who can work equally in both development and testing.',
      },
    ],
  },
  {
    id: 2,
    title: 'Responsibility #1:',
    titleHighlight: 'QA Automation and Testing Scripts',
    items: [
      {
        id: '2-0',
        text: 'Setting up automation, including Playwright for E2E.',
      },
      {
        id: '2-1',
        text: 'Writing E2E tests in JavaScript and TypeScript.',
      },
      {
        id: '2-2',
        text: 'Coordinating efforts related to unit tests and integration tests.',
      },
      {
        id: '2-3',
        text: 'Writing documentation for developers.',
      },
      {
        id: '2-4',
        text: 'CI/CD pipeline in GitHub using Jenkins, for unit, integration, and E2E tests.',
      },
    ],
  },
  {
    id: 3,
    title: 'Responsibility #2:',
    titleHighlight: 'Team Coordination',
    items: [
      {
        id: '3-0',
        text: 'Involved in hiring new SDET members for QA team.',
      },
      {
        id: '3-1',
        text: 'Work across 4 teams.',
      },
      {
        id: '3-2',
        text: '3 DEV teams (15 developers). Setting priorities for writing unit and integration tests.',
      },
      {
        id: '3-3',
        text: '1 QA team (6 manual testers). Coordinating regression testing for the website.',
      },
      {
        id: '3-4',
        text: 'Drive the discussion and decisions on technical topics related to the teams.',
      },
      {
        id: '3-5',
        text: 'Keeping up-to-date JIRA tasks for testing.',
      },
    ],
  },
]
