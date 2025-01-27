import { iconsSkillsProjectsWorkKomercniBanka } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ICON_EMOJI } from '@/localization/english'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

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
  icon: ICON_EMOJI.bank,
  title: 'Commerce Bank - Website',
  company: 'Komerční banka',
  role: 'React Developer',
  years: '10\u00A0months',
  description:
    'I created search page for ATM and branches, with their detail pages. And\u00A0also Exchange rates page with details for each currency.',
  skillsIcons: iconsSkillsProjectsWorkKomercniBanka,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Tailwind, SkillsEnum.PairProgramming],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.Figma, SkillsEnum.ResponsiveDesign],
    },
    {
      id: 2,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Jira, SkillsEnum.Confluence, SkillsEnum.Tempo, SkillsEnum.Kentico],
    },
  ],
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Branches & ATMs',
      url: 'https://www.kb.cz/en/branches-and-atms',
      dataTestId: 'branches-atms',
    },
    {
      urlText: 'Branches & ATMs - Details',
      url: 'https://www.kb.cz/en/branches-and-atms/branches/brno-nam-svobody-1',
      dataTestId: 'branches-atms-details',
    },
    {
      urlText: 'Exchange Rates',
      url: 'https://www.kb.cz/en/exchange-rates',
      dataTestId: 'exchange-rates',
    },
    {
      urlText: 'Exchange Rates - Details',
      url: 'https://www.kb.cz/en/exchange-rates/exchange-detail?curr=CHF&date=2024-12-27T07:00:00',
      dataTestId: 'exchange-rates-details',
    },
  ],
  customers: '2 000 000+',
  linkProjectPage: PAGES_URL.work.komercniBanka,
}
