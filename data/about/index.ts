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
    title: 'Front End / React Developer',
    years: '4',
    description: `
    I work with JavaScript, React, TypeScript, and Redux.
    I have a strong background in writing functional components.
    I use Tailwind CSS and create user-friendly, responsive applications.
    `,
    partTimeJob: false,
  },
  {
    path: globe,
    title: 'Front End / JavaScript Developer',
    years: '1',
    description: `
        I created new website in PHP and JavaScript for SaaS company.
        Including new and responsive design and I was working closely with UX designer.
      `,
    partTimeJob: false,
  },
  {
    path: check,
    title: 'QA Automation - Team Leader',
    years: '1',
    description: `
        I was asked to create and lead 2x QA automation teams.
        Setting up Cypress and Playwright for\u00A0E2E\u00A0testing, and writing tests in
        JavaScript and TypeScript.
      `,
    partTimeJob: false,
  },
  {
    path: text,
    title: 'Localization - Manager',
    years: '2',
    description: `
      I worked on Microsoft localization of Windows, and Windows Phone.
      I also managed localization of\u00A0SaaS company website into 10 languages.
      `,
    partTimeJob: false,
  },
]
