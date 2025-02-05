import { iconsSkillsProjectsWorkGroupon } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// groupon
import groupon1 from '@/public/images/webp/projects/work/groupon/groupon-1-light.webp'
import groupon2 from '@/public/images/webp/projects/work/groupon/groupon-2-light.webp'
import grouponThumb from '@/public/images/webp/projects/work/groupon/groupon-thumb.webp'

export const projectsWorkQA: Project[] = [
  {
    id: PROJECT_ID.work.groupon,
    isFeatured: false,
    image: grouponThumb.src,
    imageShowcase: [
      { id: 0, src: groupon1.src },
      { id: 1, src: groupon2.src },
    ],
    icon: ICON_EMOJI.shoppingCart,
    title: WORK_PROJECTS_OVERVIEW.groupon.title,
    company: WORK_PROJECTS_OVERVIEW.groupon.company,
    role: WORK_PROJECTS_OVERVIEW.groupon.role,
    years: WORK_PROJECTS_OVERVIEW.groupon.years,
    description: WORK_PROJECTS_OVERVIEW.groupon.description,
    skillsIcons: iconsSkillsProjectsWorkGroupon,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [
          SkillsEnum.TypeScript,
          SkillsEnum.React,
          SkillsEnum.Next,
          SkillsEnum.Playwright,
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
        skillsList: [
          SkillsEnum.Jira,
          SkillsEnum.Confluence,
          SkillsEnum.Tempo,
          SkillsEnum.QA,
          SkillsEnum.TeamManagement,
        ],
      },
    ],
    linkText: WORK_PROJECTS_OVERVIEW.groupon.linkText,
    projectLinks: WORK_PROJECTS_OVERVIEW.groupon.projectLinks,
    customers: WORK_PROJECTS_OVERVIEW.groupon.customers,
    linkProjectPage: WORK_PROJECTS_OVERVIEW.groupon.linkProjectPage,
  },
]
