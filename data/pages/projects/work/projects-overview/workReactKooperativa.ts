import { iconsSkillsProjectsWorkKooperativa } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { PROJECTS_WORK_KOOPERATIVA_OVERVIEW } from '@/localization/pages/projects/work-kooperativa'

// kooperativa
import kooperativa1 from '@/public/images/webp/projects/work/kooperativa/kooperativa-1-light.webp'
import kooperativa2 from '@/public/images/webp/projects/work/kooperativa/kooperativa-2-light.webp'
import kooperativa3 from '@/public/images/webp/projects/work/kooperativa/kooperativa-3-light.webp'
import kooperativaProjectPreview from '@/public/images/webp/projects/work/kooperativa/kooperativa-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { type Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

const overview = PROJECTS_WORK_KOOPERATIVA_OVERVIEW

export const workReactKooperativa: Project = {
  id: PROJECT_ID.work.kooperativa,
  isFeatured: false,
  image: kooperativaProjectPreview.src,
  galleryImages: [
    { id: 0, src: kooperativa1.src, width: kooperativa1.width, height: kooperativa1.height },
    { id: 1, src: kooperativa2.src, width: kooperativa2.width, height: kooperativa2.height },
    { id: 2, src: kooperativa3.src, width: kooperativa3.width, height: kooperativa3.height },
  ],
  icon: ICON_EMOJI.umbrellaWithRainDrops,
  ariaLabel: ARIA_LABELS.emoji.umbrellaWithRainDrops,
  title: overview.title,
  company: overview.company,
  role: overview.role,
  years: overview.years,
  description: overview.description,
  skillsIcons: iconsSkillsProjectsWorkKooperativa,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Next,
        SkillsEnum.Redux,
        SkillsEnum.Tailwind,
      ],
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
  linkText: overview.linkText,
  projectLinks: [
    {
      urlText: overview.projectLinks[0].urlText,
      url: overview.projectLinks[0].url,
      dataTestId: overview.projectLinks[0].dataTestId,
    },
  ],
  customers: overview.customers,
  linkProjectPage: PAGES_URL.workKooperativa,
}
