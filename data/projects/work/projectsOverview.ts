import { Project } from '@/utils/types'

import smartsuppWeb1 from '@/public/images/projects-work/png/smartsupp-web-1.png'
import smartsuppWeb2 from '@/public/images/projects-work/png/smartsupp-web-2.png'
import smartsuppWeb3 from '@/public/images/projects-work/png/smartsupp-web-3.png'
import smartsuppWeb4 from '@/public/images/projects-work/png/smartsupp-web-4.png'
import smartsuppWebThumb from '@/public/images/projects-work/png/smartsupp-web-thumb.png'

import smartsuppDashboard1 from '@/public/images/projects-work/png/smartsupp-dashboard-1.png'
import smartsuppDashboard2 from '@/public/images/projects-work/png/smartsupp-dashboard-2.png'
import smartsuppDashboard3 from '@/public/images/projects-work/png/smartsupp-dashboard-3.png'
import smartsuppDashboard4 from '@/public/images/projects-work/png/smartsupp-dashboard-4.png'
import smartsuppDashboard5 from '@/public/images/projects-work/png/smartsupp-dashboard-5.png'
import smartsuppDashboardThumb from '@/public/images/projects-work/png/smartsupp-dashboard-thumb.png'

import groupon1 from '@/public/images/projects-work/png/groupon-1.png'
import groupon2 from '@/public/images/projects-work/png/groupon-2.png'
import grouponThumb from '@/public/images/projects-work/png/groupon-thumb.png'

import komercniBanka1 from '@/public/images/projects-work/png/komercni-banka-1.png'
import komercniBanka2 from '@/public/images/projects-work/png/komercni-banka-2.png'
import komercniBanka3 from '@/public/images/projects-work/png/komercni-banka-3.png'
import komercniBanka4 from '@/public/images/projects-work/png/komercni-banka-4.png'
import komercniBankaThumb from '@/public/images/projects-work/png/komercni-banka-thumb.png'

export const projectsWork: Project[] = [
  {
    id: 1,
    isFeatured: true,
    image: smartsuppDashboardThumb.src,
    imageShowcase: [
      smartsuppDashboard1.src,
      smartsuppDashboard2.src,
      smartsuppDashboard3.src,
      smartsuppDashboard4.src,
      smartsuppDashboard5.src,
    ],
    title: '💬 Smartsupp - Customer Care Chat Dashboard',
    role: 'React Developer',
    years: '3 years 2 months',
    description: `I worked on chat dashboard features and new design.
      I was part of team that redesigned old settings.
      Also due to my previous experience I was involved in the UX team and could influence design of new features.`,
    mySkills: [
      {
        color: 'purple',
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Chakra UI', 'Cypress', 'Pair Programming'],
      },
      { color: 'green', description: 'Design', skills: ['UX', 'Adobe XD', 'Responsive Web Design'] },
      { color: 'yellow', description: 'Other', skills: ['Trello'] },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/' }],
    customers: '100 000+',
    linkProjectPage: '/project-work-smartsupp-dashboard',
  },
  {
    id: 2,
    isFeatured: false,
    image: smartsuppWebThumb.src,
    imageShowcase: [smartsuppWeb1.src, smartsuppWeb2.src, smartsuppWeb3.src, smartsuppWeb4.src],
    title: '🚀 Smartsupp - SaaS Company Website',
    role: 'Front End Developer',
    years: '1 year',
    description:
      'I created the company website. I also worked closely with UX on design decisions and new color theme.',
    mySkills: [
      { color: 'purple', description: 'Frontend', skills: ['JavaScript', 'PHP', 'SASS', 'BEM', 'Cypress'] },
      { color: 'green', description: 'Design', skills: ['UX', 'Adobe XD', 'Responsive Web Design'] },
      { color: 'yellow', description: 'Other', skills: ['Trello'] },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/' }],
    customers: '100 000+',
    linkProjectPage: '/project-work-smartsupp-web',
  },
  {
    id: 3,
    isFeatured: false,
    image: komercniBankaThumb.src,
    imageShowcase: [komercniBanka1.src, komercniBanka2.src, komercniBanka3.src, komercniBanka4.src],
    title: '🏦 Komerční banka - Commerce Bank Website',
    role: 'React Developer',
    years: '10 months',
    description:
      'I created search page for ATM and branches, with detail pages. And also Exchange rates page with details for each currency.',
    mySkills: [
      {
        color: 'purple',
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Pair Programming'],
      },
      { color: 'green', description: 'Design', skills: ['Figma', 'Responsive Web Design'] },
      { color: 'yellow', description: 'Other', skills: ['Jira', 'Confluence', 'Tempo', 'Kentico'] },
    ],
    linkText: 'Read more →',
    projectLinks: [
      {
        urlText: 'Branches & ATMs',
        url: 'https://www.kb.cz/en/branches-and-atms',
      },
      {
        urlText: 'Branches & ATMs - Details',
        url: 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1',
      },
      {
        urlText: 'Exchange Rates',
        url: 'https://www.kb.cz/en/exchange-rates',
      },
      {
        urlText: 'Exchange Rates - Details',
        url: 'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=USD&date=2024-02-27T18:00:00',
      },
    ],
    customers: '2 000 000+',
    linkProjectPage: '/project-work-komercni-banka',
  },
  {
    id: 4,
    isFeatured: false,
    image: grouponThumb.src,
    imageShowcase: [groupon1.src, groupon2.src],
    title: '🛒 Groupon - Online Marketplace',
    role: 'QA Automation Team Leader',
    years: '4 months',
    description:
      'I was responsible QA processes, hiring and managing QA team, creating test plans, test cases, and testing the website.',
    mySkills: [
      {
        color: 'purple',
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Playwright'],
      },
      { color: 'green', description: 'Design', skills: ['Figma'] },
      { color: 'yellow', description: 'Other', skills: ['Jira', 'Confluence', 'Tempo', 'QA', 'Team Management'] },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.groupon.com/' }],
    customers: '17 000 000+',
    linkProjectPage: '/project-work-groupon',
  },
]
