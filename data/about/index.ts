import check from '/public/icons/svg/about/check.svg'
import globe from '/public/icons/svg/about/globe.svg'
import reactLogo from '/public/icons/svg/about/react-logo.svg'

interface Job {
  path: string
  title: string
  years: string
  description: string
}

export const jobs: Job[] = [
  {
    path: reactLogo,
    title: 'React Developer',
    years: '4',
    description: `
    I create user-friendly and responsive web applications. I have worked with JavaScript, TypeScript,
    React, and Redux, as well as other technologies such as Figma, and Tailwind CSS. I have a strong
    background in UI design, functional components, and code quality.
    `,
  },
  {
    path: check,
    title: 'QA Team Leader',
    years: '2',
    description: `
        I had the opportunity to create, setup and team lead  2x QA automation teams. Setting up Cypress and Playwright for E2E tests, writing test scripts in
        JavaScript and TypeScript, and coordinating unit and integration tests.
      `,
  },
  {
    path: globe,
    title: 'WordPress Developer',
    years: '5',
    description: `
        In the past when I started in Front End, I developed custom WordPress themes and websites for clients and small companies. I have some experience with PHP.
      `,
  },
]
