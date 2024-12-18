import {
  iconsSkillsProjectsWorkKomercniBanka,
  iconsSkillsProjectsWorkKooperativa,
  iconsSkillsProjectsWorkSmartsuppDashboard,
} from '@/data/skills/skillsProjectsWork'
import { PROJECT_ID } from '@/utils/constants/ids/projectIds'
import { Project } from '@/utils/interfaces'

// komercni banka
import komercniBanka1 from '@/public/images/projects-work/komercni-banka/komercni-banka-1-light.png'
import komercniBanka2 from '@/public/images/projects-work/komercni-banka/komercni-banka-2-light.png'
import komercniBanka3 from '@/public/images/projects-work/komercni-banka/komercni-banka-3-light.png'
import komercniBanka4 from '@/public/images/projects-work/komercni-banka/komercni-banka-4-light.png'
import komercniBankaThumb from '@/public/images/projects-work/komercni-banka/komercni-banka-thumb-light-600.webp'

// kooperativa
import kooperativa1 from '@/public/images/projects-work/kooperativa/kooperativa-1-light.png'
import kooperativa2 from '@/public/images/projects-work/kooperativa/kooperativa-2-light.png'
import kooperativa3 from '@/public/images/projects-work/kooperativa/kooperativa-3-light.png'
import kooperativaThumb from '@/public/images/projects-work/kooperativa/kooperativa-thumb-light-600.webp'

// smartsupp dashboard
import smartsuppDashboard1 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-1-light.png'
import smartsuppDashboard2 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-2-light.png'
import smartsuppDashboard3 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-3-light.png'
import smartsuppDashboard4 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-4-light.png'
import smartsuppDashboard5 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-5-light.png'
import smartsuppDashboardThumb from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-thumb-light-600.webp'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

export const projectsWorkReact: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.dashboard,
    isFeatured: true,
    image: smartsuppDashboardThumb.src,
    imageShowcase: [
      { id: 1, src: smartsuppDashboard1.src },
      { id: 2, src: smartsuppDashboard2.src },
      { id: 3, src: smartsuppDashboard3.src },
      { id: 4, src: smartsuppDashboard4.src },
      { id: 5, src: smartsuppDashboard5.src },
    ],
    title: '💬 Customer Care - Chat Dashboard',
    company: 'Smartsupp',
    role: 'React Developer',
    years: '3\u00A0years 2\u00A0months',
    description:
      'I worked on chat dashboard features and new design, including redesign of settings. I was involved in UX team to learn.',
    mySkillsIcons: iconsSkillsProjectsWorkSmartsuppDashboard,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Chakra UI', 'Cypress', 'Pair Programming'],
      },
      { id: 2, description: 'Design', skillsList: ['UX', 'Adobe XD', 'Responsive Design'] },
      { id: 3, description: 'Other', skillsList: ['Trello'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.dashboard,
  },
  {
    id: PROJECT_ID.work.komercniBanka,
    isFeatured: false,
    image: komercniBankaThumb.src,
    imageShowcase: [
      { id: 1, src: komercniBanka1.src },
      { id: 2, src: komercniBanka2.src },
      { id: 3, src: komercniBanka3.src },
      { id: 4, src: komercniBanka4.src },
    ],
    title: '🏦 Commerce Bank - Website',
    company: 'Komerční banka',
    role: 'React Developer',
    years: '10\u00A0months',
    description:
      'I created search page for ATM and branches, with their detail pages. And also Exchange rates page with details for each currency.',
    mySkillsIcons: iconsSkillsProjectsWorkKomercniBanka,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Pair Programming'],
      },
      { id: 2, description: 'Design', skillsList: ['Figma', 'Responsive Design'] },
      { id: 3, description: 'Other', skillsList: ['Jira', 'Confluence', 'Tempo', 'Kentico'] },
    ],
    linkText: 'Project details',
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
    linkProjectPage: PAGES_URL.work.komercniBanka,
  },
  {
    id: PROJECT_ID.work.kooperativa,
    isFeatured: false,
    image: kooperativaThumb.src,
    imageShowcase: [
      { id: 1, src: kooperativa1.src },
      { id: 2, src: kooperativa2.src },
      { id: 3, src: kooperativa3.src },
    ],
    title: '☔ Insurance company app',
    company: 'Kooperativa',
    role: 'React Developer',
    years: '8\u00A0months',
    description: 'I worked on an application for managing insurance policies for citizens property and products.',
    mySkillsIcons: iconsSkillsProjectsWorkKooperativa,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
      },
      { id: 2, description: 'Design', skillsList: ['Figma', 'Storybook'] },
      { id: 3, description: 'Other', skillsList: ['Jira', 'Confluence'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.koop.cz/pojisteni/pojisteni-majetku' }],
    customers: '2 480 000+',
    linkProjectPage: PAGES_URL.work.kooperativa,
  },
]
