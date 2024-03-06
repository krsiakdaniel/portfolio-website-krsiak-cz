import bug from '@/public/icons/svg/about/bug.svg'
import check from '@/public/icons/svg/about/check.svg'
import globe from '@/public/icons/svg/about/globe.svg'
import reactLogo from '@/public/icons/svg/about/react-logo.svg'
import text from '@/public/icons/svg/about/text.svg'

interface Job {
  path: string
  title: string
  years: string
  description: string
  partTimeJob: boolean
}

export const jobs: Job[] = [
  {
    path: reactLogo,
    title: 'Front End - React Developer',
    years: '4',
    description: `
    I use JavaScript, React, TypeScript, and Redux.
    I worked on Dashboard application for customer care.
    And I also worked on Banking website for Komercni banka.
    `,
    partTimeJob: false,
  },
  {
    path: globe,
    title: 'Front End - JavaScript Developer',
    years: '1',
    description: `
        I created new website using PHP and JavaScript for SaaS company.
        Including new responsive design. I was also working closely with UX designer.
      `,
    partTimeJob: false,
  },
  {
    path: check,
    title: 'QA Automation - Team Leader',
    years: '1',
    description: `
        I was asked to create and lead 2x QA automation teams.
        Setup Cypress and Playwright for\u00A0E2E.
        Writing tests in JavaScript and TypeScript.
      `,
    partTimeJob: false,
  },
  {
    path: text,
    title: 'Localization - Manager',
    years: '2',
    description: `
      I worked on localization of Microsoft Windows, and Windows Phone.
      I also managed localization of\u00A0SaaS company website into 9 languages.
      `,
    partTimeJob: false,
  },
  {
    path: bug,
    title: 'Localization - Tester',
    years: '3',
    description: `
      I worked on Microsoft projects testing layouts for Windows + Windows Store.
      `,
    partTimeJob: false,
  },
]
