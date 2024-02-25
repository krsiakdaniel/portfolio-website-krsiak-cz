import { Project } from '@/utils/types'

import smartsuppWebThumb from '../public/images/projects-work/png/smartsupp-web-thumb.png'
import smartsuppWeb1 from '../public/images/projects-work/png/smartsupp-web-1.png'
import smartsuppWeb2 from '../public/images/projects-work/png/smartsupp-web-2.png'
import smartsuppWeb3 from '../public/images/projects-work/png/smartsupp-web-3.png'

import smartsuppDashboardThumb from '../public/images/projects-work/png/smartsupp-dashboard-thumb.png'
import smartsuppDashboard1 from '../public/images/projects-work/png/smartsupp-dashboard-1.png'

import grouponThumb from '../public/images/projects-work/png/groupon-thumb.png'
import groupon1 from '../public/images/projects-work/png/groupon-1.png'

import komercniBankaThumb from '../public/images/projects-work/png/komercni-banka-thumb.png'
import komercniBanka1 from '../public/images/projects-work/png/komercni-banka-1.png'

import image1 from '../public/images/projects-work/png/smartsupp-web-1.png'
import image2 from '../public/images/projects-work/png/smartsupp-web-2.png'
import image3 from '../public/images/projects-work/png/smartsupp-web-3.png'

export const projectsWork: Project[] = [
  {
    id: 1,
    image: smartsuppWebThumb.src,
    imageShowcase: [smartsuppWeb1.src, smartsuppWeb2.src, smartsuppWeb3.src],
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
    image: smartsuppDashboardThumb.src,
    imageShowcase: [smartsuppDashboard1.src],
    title: '👨‍💻 Smartsupp - Customer care chat dashboard',
    role: 'React Developer',
    description:
      'I worked on the customer care chat dashboard. I also redesigned completely settings of the application.',
    mySkills: 'React · JavaScript · TypeScript · Redux · Chakra UI · Adobe XD',
    linkText: 'Read more →',
    link: ['https://www.smartsupp.com/live-chat-for-customer-care-teams/'],
    customers: '100 000+',
    linkProjectPage: '/project-work-smartsupp-dashboard',
  },
  {
    id: 3,
    image: komercniBankaThumb.src,
    imageShowcase: [komercniBanka1.src],
    title: '🏦 Komerční banka - Commerce Bank website',
    role: 'React Developer',
    description:
      'I created search page for ATM and branches, with detail pages. And also Exchange rates page with details for each currency.',
    mySkills: 'React · JavaScript · TypeScript · Tailwind CSS · Figma · Kentico',
    linkText: 'Read more →',
    link: ['https://www.kb.cz/en/branches-and-atms'],
    customers: '2 000 000+',
    linkProjectPage: '/project-work-komercni-banka',
  },
  {
    id: 4,
    image: grouponThumb.src,
    imageShowcase: [groupon1.src],
    title: '🛒 Groupon - Online marketplace',
    role: 'QA Automation Team Leader',
    description:
      'I was responsible QA processes, hiring and managing QA team, creating test plans, test cases, and testing the website.',
    mySkills: 'JavaScript · TypeScript · React · Next.js · Playwright · Figma · Jira',
    linkText: 'Read more →',
    link: ['https://www.groupon.com/'],
    customers: '17 000 000+',
    linkProjectPage: '/project-work-groupon',
  },
]
