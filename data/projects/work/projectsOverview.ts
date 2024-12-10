import {
  iconsSkillsProjectsWorkGroupon,
  iconsSkillsProjectsWorkKomercniBanka,
  iconsSkillsProjectsWorkKooperativa,
  iconsSkillsProjectsWorkMoravia,
  iconsSkillsProjectsWorkSmartsuppDashboard,
  iconsSkillsProjectsWorkSmartsuppHelp,
  iconsSkillsProjectsWorkSmartsuppWeb,
} from '@/data/skills/skills-projects-work'
import { PAGES_URL, PROJECT_ID } from '@/utils/constants'
import { Project } from '@/utils/interfaces'

// moravia
import moravia1 from '@/public/images/projects-work/moravia/moravia-1-light.png'
import moravia2 from '@/public/images/projects-work/moravia/moravia-2-light.png'
import moravia3 from '@/public/images/projects-work/moravia/moravia-3-light.png'
import moraviaThumb from '@/public/images/projects-work/moravia/moravia-thumb-light-600.webp'

// groupon
import groupon1 from '@/public/images/projects-work/groupon/groupon-1-light.png'
import groupon2 from '@/public/images/projects-work/groupon/groupon-2-light.png'
import grouponThumb from '@/public/images/projects-work/groupon/groupon-thumb-light-600.webp'

// komercni-banka
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

// smartsupp-dashboard
import smartsuppDashboard1 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-1-light.png'
import smartsuppDashboard2 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-2-light.png'
import smartsuppDashboard3 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-3-light.png'
import smartsuppDashboard4 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-4-light.png'
import smartsuppDashboard5 from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-5-light.png'
import smartsuppDashboardThumb from '@/public/images/projects-work/smartsupp-dashboard/smartsupp-dashboard-thumb-light-600.webp'

// smartsupp-web
import smartsuppWeb1 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-1-light.png'
import smartsuppWeb2 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-2-light.png'
import smartsuppWeb3 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-3-light.png'
import smartsuppWeb4 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-4-light.png'
import smartsuppWebThumb from '@/public/images/projects-work/smartsupp-web/smartsupp-web-thumb-light-600.webp'

// smartsupp-help
import smartsuppHelp1 from '@/public/images/projects-work/smartsupp-help/smartsupp-help-1-light.png'
import smartsuppHelp2 from '@/public/images/projects-work/smartsupp-help/smartsupp-help-2-light.png'
import smartsuppHelp3 from '@/public/images/projects-work/smartsupp-help/smartsupp-help-3-light.png'
import smartsuppHelpThumb from '@/public/images/projects-work/smartsupp-help/smartsupp-help-thumb-light-600.webp'

// TODO: split this into smaller files per technology domain
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

export const projectsWorkFrontEnd: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.web,
    isFeatured: false,
    image: smartsuppWebThumb.src,
    imageShowcase: [
      { id: 1, src: smartsuppWeb1.src },
      { id: 2, src: smartsuppWeb2.src },
      { id: 3, src: smartsuppWeb3.src },
      { id: 4, src: smartsuppWeb4.src },
    ],
    title: '🖥️ SaaS Company - Website',
    company: 'Smartsupp',
    role: 'Front End Developer',
    years: '1\u00A0year',
    description:
      'I created the company website Front End. I worked closely with the\u00A0main UX designer on new brand color theme and layout decisions.',
    mySkillsIcons: iconsSkillsProjectsWorkSmartsuppWeb,
    skillsOverview: [
      { id: 1, description: 'Frontend', skillsList: ['JavaScript', 'PHP', 'SASS', 'BEM', 'Cypress'] },
      { id: 2, description: 'Design', skillsList: ['UX', 'Adobe XD', 'Responsive Design'] },
      { id: 3, description: 'Other', skillsList: ['Trello'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.web,
  },
]

export const projectsWorkWordPress: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.help,
    isFeatured: false,
    image: smartsuppHelpThumb.src,
    imageShowcase: [
      { id: 1, src: smartsuppHelp1.src },
      { id: 2, src: smartsuppHelp2.src },
      { id: 3, src: smartsuppHelp3.src },
    ],
    title: '📚 SaaS Company - HELP Website',
    company: 'Smartsupp',
    role: 'Admin & Content Writer',
    years: '6\u00A0months',
    description:
      'Responsible for the company HELP website running on WordPress and\u00A0writing tutorials. Localization into 9 languages.',
    mySkillsIcons: iconsSkillsProjectsWorkSmartsuppHelp,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'WordPress', 'PHP'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://help.smartsupp.com/' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.help,
  },
]

export const projectsWorkQA: Project[] = [
  {
    id: PROJECT_ID.work.groupon,
    isFeatured: false,
    image: grouponThumb.src,
    imageShowcase: [
      { id: 1, src: groupon1.src },
      { id: 2, src: groupon2.src },
    ],
    title: '🛒 E-Commerce - Marketplace',
    company: 'Groupon',
    role: 'QA Automation - Team Leader',
    years: '4\u00A0months',
    description:
      'I was responsible setting up new QA team, related processes, hiring and managing people, making test plans, test cases, and scripts.',
    mySkillsIcons: iconsSkillsProjectsWorkGroupon,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Playwright'],
      },
      { id: 2, description: 'Design', skillsList: ['Figma', 'Storybook'] },
      { id: 3, description: 'Other', skillsList: ['Jira', 'Confluence', 'Tempo', 'QA', 'Team Management'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.groupon.com/' }],
    customers: '17 000 000+',
    linkProjectPage: PAGES_URL.work.groupon,
  },
]

export const projectsWorkLocalization: Project[] = [
  {
    id: PROJECT_ID.work.moravia,
    isFeatured: true,
    image: moraviaThumb.src,
    imageShowcase: [
      { id: 1, src: moravia1.src },
      { id: 2, src: moravia2.src },
      { id: 3, src: moravia3.src },
    ],
    title: '🖥️ Windows',
    company: 'RWS (Moravia - IT)',
    role: 'QA Automation - Team Leader',
    years: '1 year',
    description:
      'I had amazing chance to be team leader on Microsoft products, doing quality checks for Microsoft projects Windows 8 + Windows Phone.',
    mySkillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.rws.com/' }],
    customers: '80 out of the world top 100 brands',
    linkProjectPage: PAGES_URL.work.moravia,
  },
]
