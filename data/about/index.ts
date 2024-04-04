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
}

export const jobs: Job[] = [
  {
    path: reactLogo,
    title: 'Front End - React Developer',
    years: '4',
    description: `
    With  hands-on experience, I specialize in JavaScript, TypeScript, React, and Redux.
    Noteworthy achievements include the development of a Dashboard application for customer care and\u00A0contributions to a Banking website for Komercni banka.
    Showcasing my proficiency in crafting user-centric solutions.
    `,
  },
  {
    path: globe,
    title: 'Front End - JavaScript Developer',
    years: '1',
    description: `
        I led the creation of a new website using PHP and JavaScript for a prominent SaaS company.
        This involved implementing a responsive design strategy and collaborating closely with UX designers to\u00A0ensure an optimal user experience.
      `,
  },
  {
    path: check,
    title: 'QA Automation - Team Leader',
    years: '1',
    description: `
        In my role as a QA Automation Team Leader, I successfully led 2 QA teams in implementing testing tools like Cypress and Playwright for E2E testing.
        My responsibilities also included writing tests in\u00A0JavaScript and TypeScript to ensure robust test coverage and maintain code quality.
      `,
  },
  {
    path: text,
    title: 'Localization - Manager',
    years: '2',
    description: `
      I managed small team and oversaw the localization efforts for Microsoft Windows 8 and\u00A0Windows Phone, managing the translation of a SaaS company website into nine languages.
      This role honed my project management skills and deepened my understanding of internationalization strategies.
      `,
  },
  {
    path: bug,
    title: 'Localization - Tester',
    years: '3',
    description: `
      I conducted thorough layout testing for Microsoft projects, including Windows 7 and Windows Store, ensuring seamless user experiences across different platforms.
      `,
  },
]
