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
    title: 'React Developer',
    years: '4',
    description: `
    I work with JavaScript, TypeScript, React, and Redux.
    I have a strong background writing functional components.
    I use Tailwind CSS for styling and create user-friendly, responsive applications.
    `,
    partTimeJob: false,
  },
  {
    path: check,
    title: 'QA Automation - Team Leader',
    years: '2',
    description: `
        I was asked to create and lead 2x QA automation teams.
        Setting up Cypress and Playwright for E2E tests, writing test scripts in
        JavaScript and TypeScript, and coordinating unit and integration tests.
      `,
    partTimeJob: false,
  },
  {
    path: text,
    title: 'Localization - Manager',
    years: '2',
    description: `
    I had the amazing chance to work on Microsoft's projects. I was involved in localization of Windows, and Windows Phone. I also managed localization of SaaS company website into 10 languages.
      `,
    partTimeJob: false,
  },
  {
    path: globe,
    title: 'WordPress Developer',
    years: '5',
    description: `
        In the past when I started in Front End, I developed custom WordPress websites for clients and small companies. In doing so I gained some experience with PHP.
      `,
    partTimeJob: true,
  },
]
