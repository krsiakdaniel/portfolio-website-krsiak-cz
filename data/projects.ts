import { Project } from '@/utils/types'

import work1 from '../public/images/projects-work/png/smartsupp-web-thumb.png'
import work2 from '../public/images/projects-work/png/smartsupp-dashboard-thumb.png'
import work3 from '../public/images/projects-work/png/kb-thumb.png'
import work4 from '../public/images/projects-work/png/groupon-thumb.png'

import image1 from '../public/images/projects-work/png/smartsupp-web-1.png'
import image2 from '../public/images/projects-work/png/smartsupp-web-2.png'
import image3 from '../public/images/projects-work/png/smartsupp-web-3.png'

import project1 from '../public/images/projects-personal/png/personal-1-thumb.png'
import project2 from '../public/images/projects-personal/png/personal-2-thumb.png'
import project3 from '../public/images/projects-personal/png/personal-3-thumb.png'

export const projectsWork: Project[] = [
  {
    id: 1,
    image: work1.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '🚀 Smartsupp - SaaS company website',
    role: 'Front End Developer',
    description:
      'I created the company website. I also worked closely with UX on design decisions and new color scheme.',
    mySkills: 'JavaScript · PHP · Responsive Web Design · SASS · BEM',
    linkText: 'Read more →',
    link: ['https://www.smartsupp.com/'],
    customers: '100 000+',
    linkProjectPage: '/project-work-smartsupp-web',
  },
  {
    id: 2,
    image: work2.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '👨‍💻 Smartsupp - Customer care chat dashboard',
    role: 'React Developer',
    description:
      'I worked on the customer care chat dashboard. I also redesigned completely settings of the application.',
    mySkills: 'React · JavaScript · TypeScript · Redux · Chakra UI · Adobe XD',
    linkText: 'Read more →',
    link: ['https://www.smartsupp.com/live-chat-for-customer-care-teams/'],
    customers: '100 000+',
    linkProjectPage: '',
  },
  {
    id: 3,
    image: work3.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '🏦 Komerční banka - Commerce Bank website',
    role: 'React Developer',
    description:
      'I created search page for ATM and branches, with detail pages. And also Exchange rates page with details for each currency.',
    mySkills: 'React · JavaScript · TypeScript · Tailwind CSS · Figma · Kentico',
    linkText: 'Read more →',
    link: ['https://www.kb.cz/en/branches-and-atms'],
    customers: '2 000 000+',
    linkProjectPage: '',
  },
  {
    id: 4,
    image: work4.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '🛒 Groupon - Online marketplace',
    role: 'QA Automation Team Leader',
    description:
      'I was responsible QA processes, hiring and managing QA team, creating test plans, test cases, and testing the website.',
    mySkills: 'JavaScript · TypeScript · React · Next.js · Playwright · Figma · Jira',
    linkText: 'Read more →',
    link: ['https://www.groupon.com/'],
    customers: '17 000 000+',
    linkProjectPage: '',
  },
]

export const projectsPersonal: Project[] = [
  {
    id: 1,
    image: project1.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description: 'My personal portfolio website to showcase my work and skills.',
    mySkills: 'JavaScript · TypeScript · Next.js · Tailwind CSS',
    linkText: 'Read more →',
    link: [''],
    customers: '',
    linkProjectPage: '',
  },
  {
    id: 2,
    image: project2.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '💰 CryptoMania',
    role: 'React App',
    description: 'Crypto currency price tracker using CoinGecko API.',
    mySkills: 'JavaScript · TypeScript · React App · Chakra UI · CoinGecko API',
    linkText: 'Read more →',
    link: ['https://cryptomania-currency-prices.netlify.app/'],
    customers: '',
    linkProjectPage: '',
  },
  {
    id: 3,
    image: project3.src,
    imageShowcase: [image1.src, image2.src, image3.src],
    title: '🛒 eCommerce Website',
    role: 'Vue.js App',
    description: 'Simple eCommerce website. First time coding with Vue and Nuxt.',
    mySkills: 'JavaScript · Vue.js · Nuxt.js · Vuetify',
    linkText: 'Read more →',
    link: ['https://ecommerce-vue-nuxt.onrender.com/'],
    customers: '',
    linkProjectPage: '',
  },
]
