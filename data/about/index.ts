import bug from '@/public/icons/svg/about/bug.svg'
import check from '@/public/icons/svg/about/check.svg'
import globe from '@/public/icons/svg/about/globe.svg'
import reactLogo from '@/public/icons/svg/about/react-logo.svg'
import text from '@/public/icons/svg/about/text.svg'
import { YEARS } from '@/utils/constants'
import { Job } from '@/utils/interfaces'

export const jobs: Job[] = [
  {
    id: 1,
    path: reactLogo,
    title: 'Front End - React Developer',
    years: YEARS.react,
    description: `
    I have hands-on experience with JavaScript, TypeScript, React, and Redux that includes
    the development of a dashboard application for customer care,
    contributions to a banking website for Komercni banka
    and work on application for Kooperativa managing insurance policies for citizens' property and products.
    `,
  },
  {
    id: 2,
    path: globe,
    title: 'Front End - Web Developer',
    years: YEARS.webDeveloper,
    description: `
        I led the creation of a new website using PHP and JavaScript for a prominent SaaS company.
        This involved implementing a responsive design strategy and collaborating closely with UX designers to\u00A0ensure an optimal user experience.
      `,
  },
  {
    id: 3,
    path: check,
    title: 'QA Automation - Team Leader',
    years: YEARS.qaAutomation,
    description: `
        In my role as a QA Automation Team Leader, I successfully led 2 QA teams in implementing testing tools like Cypress and Playwright for E2E testing.
        My responsibilities also included writing tests in\u00A0JavaScript and TypeScript to ensure robust test coverage and maintain code quality.
      `,
  },
  {
    id: 4,
    path: text,
    title: 'Localization - Manager',
    years: YEARS.localizationManager,
    description: `
      I managed small team and oversaw the localization efforts for Microsoft Windows 8 and\u00A0Windows Phone, managing the translation of a SaaS company website into nine languages.
      This role honed my project management skills and deepened my understanding of internationalization strategies.
      `,
  },
  {
    id: 5,
    path: bug,
    title: 'Localization - Tester',
    years: YEARS.localizationTester,
    description: `
      I conducted thorough layout testing for Microsoft projects, including Windows 7 and Windows Store, ensuring seamless user experiences across different platforms.
      `,
  },
  {
    id: 6,
    path: globe,
    title: 'Front End - Web Coder',
    years: YEARS.webCoder,
    description: `
        Back in 2009 I had my first freelance job as a web coder. Developing websites for small businesses and individuals. That eventually led me to my full-time career in IT later on. 
      `,
  },
]
