import { iconsSkillsProjectsWorkKooperativa } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// kooperativa
import kooperativa1 from '@/public/images/webp/projects/work/kooperativa/kooperativa-1-light.webp'
import kooperativa2 from '@/public/images/webp/projects/work/kooperativa/kooperativa-2-light.webp'
import kooperativa3 from '@/public/images/webp/projects/work/kooperativa/kooperativa-3-light.webp'
import kooperativaProjectPreview from '@/public/images/webp/projects/work/kooperativa/kooperativa-project-preview.webp'

export const workReactKooperativa: Project = {
  id: PROJECT_ID.work.kooperativa,
  isFeatured: false,
  image: kooperativaProjectPreview.src,
  galleryImages: [
    { id: 0, src: kooperativa1.src },
    { id: 1, src: kooperativa2.src },
    { id: 2, src: kooperativa3.src },
  ],
  icon: ICON_EMOJI.umbrellaWithRainDrops,
  title: WORK_PROJECTS_OVERVIEW.kooperativa.title,
  company: WORK_PROJECTS_OVERVIEW.kooperativa.company,
  role: WORK_PROJECTS_OVERVIEW.kooperativa.role,
  years: WORK_PROJECTS_OVERVIEW.kooperativa.years,
  description: WORK_PROJECTS_OVERVIEW.kooperativa.description,
  skillsIcons: iconsSkillsProjectsWorkKooperativa,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Redux, SkillsEnum.Tailwind],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.Figma, SkillsEnum.Storybook],
    },
    {
      id: 2,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Jira, SkillsEnum.Confluence],
    },
  ],
  linkText: WORK_PROJECTS_OVERVIEW.kooperativa.linkText,
  projectLinks: [
    {
      urlText: WORK_PROJECTS_OVERVIEW.kooperativa.projectLinks[0].urlText,
      url: WORK_PROJECTS_OVERVIEW.kooperativa.projectLinks[0].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.kooperativa.projectLinks[0].dataTestId,
    },
  ],
  customers: WORK_PROJECTS_OVERVIEW.kooperativa.customers,
  linkProjectPage: PAGES_URL.work.kooperativa,
}
