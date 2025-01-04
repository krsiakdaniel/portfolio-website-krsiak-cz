import { YEARS } from '@/lib/utils/constants/yearsExperience'

import { Job } from '@/lib/utils/interfaces/interfaces'

import bug from '@/public/icons/svg/bug.svg'
import check from '@/public/icons/svg/check.svg'
import globe from '@/public/icons/svg/globe.svg'
import reactLogo from '@/public/icons/svg/react.svg'
import text from '@/public/icons/svg/text.svg'

export const jobs: Job[] = [
  {
    id: 0,
    path: reactLogo,
    title: 'Front End - React Developer',
    years: YEARS.react,
    description: `
      I built a customer care dashboard,
      contributed to the\u00A0Komerční banka website,
      and\u00A0developed the\u00A0Kooperativa insurance policy management app using JavaScript, TypeScript, React, and\u00A0Redux.
    `,
  },
  {
    id: 1,
    path: globe,
    title: 'Front End - Web Developer',
    years: YEARS.webDeveloper,
    description: `
        I led the development of a\u00A0responsive website for\u00A0a\u00A0SaaS company, integrating PHP, JavaScript,
        and\u00A0UX\u00A0design principles to create a\u00A0seamless user experience.
      `,
  },
  {
    id: 2,
    path: check,
    title: 'QA Automation - Team Leader',
    years: YEARS.qaAutomation,
    description: `
        I led 2 QA teams to implement Cypress and\u00A0Playwright for E2E testing,
        writing tests in JavaScript and\u00A0TypeScript to ensure high-quality code.
        This role sharpened my leadership skills and attention to detail.
      `,
  },
  {
    id: 3,
    path: text,
    title: 'Localization - Manager',
    years: YEARS.localizationManager,
    description: `
        I worked on the localization of Microsoft Windows\u00A08, and\u00A0Windows\u00A0Phone.
        This role honed my\u00A0project management and\u00A0internationalization expertise.
        I also led the localization of\u00A0a\u00A0SaaS company site translated into 9\u00A0languages: 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱
      `,
  },
  {
    id: 4,
    path: bug,
    title: 'Localization - Tester',
    years: YEARS.localizationTester,
    description: `
        I performed layout testing for Microsoft projects,
        including Windows\u00A07 and\u00A0Windows\u00A0Store, ensuring cross-platform user experience quality.
        This role gave me understanding of\u00A0user-centric design.
      `,
  },
  {
    id: 5,
    path: globe,
    title: 'Front End - Web Coder',
    years: YEARS.webCoder,
    description: `
        My IT career began with developing websites for\u00A0small businesses, laying the\u00A0foundation for\u00A0my\u00A0career in\u00A0IT.
        This experience taught me the importance of\u00A0continuous learning.
      `,
  },
]
