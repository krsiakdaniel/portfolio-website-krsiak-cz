import { Project } from '@/utils/types'

import work1 from '../public/images/work/png/work-1-thumb.png'
import work2 from '../public/images/work/png/work-2-thumb.png'
import work3 from '../public/images/work/png/work-3-thumb.png'
import work4 from '../public/images/work/png/work-4-thumb.png'

import project1 from '../public/images/personal-projects/png/personal-1-thumb.png'
import project2 from '../public/images/personal-projects/png/personal-2-thumb.png'
import project3 from '../public/images/personal-projects/png/personal-3-thumb.png'

export const projectsWork: Project[] = [
  {
    id: 1,
    image: work1.src,
    title: '🚀 Smartsupp - SAAS company website',
    role: 'Front End Developer',
    description: 'I created the company website. And worked closely with UX on design decisions.',
    techStack: 'JavaScript · PHP · Responsive Web Design · SASS · BEM',
    linkText: 'Go to website →',
    link: 'https://www.smartsupp.com/',
    customers: '4 000 000+',
  },
  {
    id: 2,
    image: work2.src,
    title: '👨‍💻 Smartsupp - Customer care chat dashboard',
    role: 'React Developer',
    description: 'I worked on the customer care chat dashboard. Also redesigned the settings of the application.',
    techStack: 'React · JavaScript · TypeScript · Redux · Chakra UI · Adobe XD',
    linkText: 'Go to website →',
    link: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/',
    customers: '100 000+',
  },
  {
    id: 3,
    image: work3.src,
    title: '🏦 Komerční banka - Commerce Bank website',
    role: 'React Developer',
    description:
      'I created search page for ATM and branches, with detail pages. And also Exchange rates page with details for each currency.',
    techStack: 'React · JavaScript · TypeScript · Tailwind CSS · Figma · Kentico',
    linkText: 'Go to website →',
    link: 'https://www.kb.cz/en/branches-and-atms',
    customers: '2 000 000+',
  },
  {
    id: 4,
    image: work4.src,
    title: '🛒 Groupon - Online marketplace',
    role: 'QA Automation Team Leader',
    description:
      'I was responsible for setting up QA processes, hiring and managing QA team, creating test plans, test cases, and testing the website.',
    techStack: 'JavaScript · TypeScript · React · Next.js · Playwright · Figma · Jira',
    linkText: 'Go to website →',
    link: 'https://www.groupon.com/',
    customers: '17 000 000+',
  },
]

export const projectsPersonal: Project[] = [
  {
    id: 1,
    image: project1.src,
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description: 'My personal portfolio website to showcase my work and skills.',
    techStack: 'JavaScript · TypeScript · Next.js · Tailwind CSS',
    linkText: 'Go to website →',
    link: '',
    customers: '',
  },
  {
    id: 2,
    image: project2.src,
    title: '💰 CryptoMania',
    role: 'React App',
    description: 'Crypto currency price tracker using CoinGecko API.',
    techStack: 'JavaScript · TypeScript · React App · Chakra UI · CoinGecko API',
    linkText: 'Go to website →',
    link: 'https://cryptomania-currency-prices.netlify.app/',
    customers: '',
  },
  {
    id: 3,
    image: project3.src,
    title: '🛒 eCommerce Website',
    role: 'Vue.js App',
    description: 'Simple eCommerce website. First time coding with Vue.js and Nuxt.js.',
    techStack: 'JavaScript · Vue.js · Nuxt.js · Vuetify',
    linkText: 'Go to website →',
    link: 'https://ecommerce-vue-nuxt.onrender.com/',
    customers: '',
  },
]
