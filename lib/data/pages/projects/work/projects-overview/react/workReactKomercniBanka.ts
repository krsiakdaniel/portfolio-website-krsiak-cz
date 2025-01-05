import { iconsSkillsProjectsWorkKomercniBanka } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/interfaces/interfaces'

// komercni banka
import komercniBanka1 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-1-light.webp'
import komercniBanka2 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-2-light.webp'
import komercniBanka3 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-3-light.webp'
import komercniBanka4 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-4-light.webp'
import komercniBankaThumb from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-thumb.webp'

export const workReactKomercniBanka: Project = {
  id: PROJECT_ID.work.komercniBanka,
  isFeatured: false,
  image: komercniBankaThumb.src,
  imageShowcase: [
    { id: 0, src: komercniBanka1.src },
    { id: 1, src: komercniBanka2.src },
    { id: 2, src: komercniBanka3.src },
    { id: 3, src: komercniBanka4.src },
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
      id: 0,
      description: 'Frontend',
      skillsList: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Pair Programming'],
    },
    { id: 1, description: 'Design', skillsList: ['Figma', 'Responsive Design'] },
    { id: 2, description: 'Other', skillsList: ['Jira', 'Confluence', 'Tempo', 'Kentico'] },
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
      url: 'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=CHF&date=2024-12-27T07:00:00',
    },
  ],
  customers: '2 000 000+',
  linkProjectPage: PAGES_URL.work.komercniBanka,
}
