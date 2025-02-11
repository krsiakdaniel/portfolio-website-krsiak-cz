import { iconsSkillsProjectsWorkKomercniBanka } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ICON_EMOJI } from '@/localization/english'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// komercni banka
import komercniBanka1 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-1-light.webp'
import komercniBanka2 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-2-light.webp'
import komercniBanka3 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-3-light.webp'
import komercniBanka4 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-4-light.webp'
import komercniBankaProjectPreview from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-project-preview.webp'

export const workReactKomercniBanka: Project = {
  id: PROJECT_ID.work.komercniBanka,
  isFeatured: false,
  image: komercniBankaProjectPreview.src,
  galleryImages: [
    { id: 0, src: komercniBanka1.src },
    { id: 1, src: komercniBanka2.src },
    { id: 2, src: komercniBanka3.src },
    { id: 3, src: komercniBanka4.src },
  ],
  icon: ICON_EMOJI.bank,
  title: WORK_PROJECTS_OVERVIEW.komercniBanka.title,
  company: WORK_PROJECTS_OVERVIEW.komercniBanka.company,
  role: WORK_PROJECTS_OVERVIEW.komercniBanka.role,
  years: WORK_PROJECTS_OVERVIEW.komercniBanka.years,
  description: WORK_PROJECTS_OVERVIEW.komercniBanka.description,
  skillsIcons: iconsSkillsProjectsWorkKomercniBanka,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Tailwind,
        SkillsEnum.PairProgramming,
      ],
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
  linkText: WORK_PROJECTS_OVERVIEW.komercniBanka.linkText,
  projectLinks: [
    {
      urlText: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[0].urlText,
      url: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[0].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[0].dataTestId,
    },
    {
      urlText: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[1].urlText,
      url: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[1].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[1].dataTestId,
    },
    {
      urlText: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[2].urlText,
      url: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[2].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[2].dataTestId,
    },
    {
      urlText: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[3].urlText,
      url: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[3].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.komercniBanka.projectLinks[3].dataTestId,
    },
  ],
  customers: WORK_PROJECTS_OVERVIEW.komercniBanka.customers,
  linkProjectPage: PAGES_URL.work.komercniBanka,
}
