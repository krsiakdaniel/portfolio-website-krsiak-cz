import { YEARS } from '@/lib/utils/constants/yearsExperience'

import { Job } from '@/lib/utils/interfaces/interfaces'

import bug from '@/public/icons/svg/about-me/bug.svg'
import check from '@/public/icons/svg/about-me/check.svg'
import globe from '@/public/icons/svg/about-me/globe.svg'
import reactLogo from '@/public/icons/svg/about-me/react-logo.svg'
import text from '@/public/icons/svg/about-me/text.svg'

export const jobs: Job[] = [
  {
    id: 0,
    path: reactLogo,
    title: 'Front End - React Developer',
    years: YEARS.react,
    description: `
    Built a customer care dashboard, contributed to Komerční banka website,
    and\u00A0developed Kooperativa insurance policy management app using JavaScript, TypeScript, React, and\u00A0Redux.
    `,
  },
  {
    id: 1,
    path: globe,
    title: 'Front End - Web Developer',
    years: YEARS.webDeveloper,
    description: `
        Led the development of a responsive website for a SaaS company,
        integrating PHP, JavaScript, and\u00A0UX design principles.
      `,
  },
  {
    id: 2,
    path: check,
    title: 'QA Automation - Team Leader',
    years: YEARS.qaAutomation,
    description: `
        Led 2 QA teams to implement Cypress and Playwright for E2E testing, writing tests in JavaScript
        and\u00A0TypeScript to\u00A0ensure high-quality code.
      `,
  },
  {
    id: 3,
    path: text,
    title: 'Localization - Manager',
    years: YEARS.localizationManager,
    description: `
      Directed the localization of Microsoft Windows 8, Windows Phone,
      and a SaaS company site into 9\u00A0languages, enhancing project management and\u00A0internationalization expertise.
      `,
  },
  {
    id: 4,
    path: bug,
    title: 'Localization - Tester',
    years: YEARS.localizationTester,
    description: `
      Performed layout testing for Microsoft projects, including Windows 7 and Windows Store,
      ensuring cross-platform user experience quality.
      `,
  },
  {
    id: 5,
    path: globe,
    title: 'Front End - Web Coder',
    years: YEARS.webCoder,
    description: `
        Began IT career developing websites for small businesses,
        laying the foundation that eventually led me to full-time career in IT. 
      `,
  },
]
