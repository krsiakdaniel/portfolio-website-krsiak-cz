import { iconsSkillsProjectsWorkSmartsuppWeb } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp web
import smartsuppWeb1 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-1-light.webp'
import smartsuppWeb2 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-2-light.webp'
import smartsuppWeb3 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-3-light.webp'
import smartsuppWeb4 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-4-light.webp'
import smartsuppWebThumb from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-thumb.webp'

export const projectsWorkFrontEnd: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.web,
    isFeatured: false,
    image: smartsuppWebThumb.src,
    imageShowcase: [
      { id: 0, src: smartsuppWeb1.src },
      { id: 1, src: smartsuppWeb2.src },
      { id: 2, src: smartsuppWeb3.src },
      { id: 3, src: smartsuppWeb4.src },
    ],
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    title: WORK_PROJECTS_OVERVIEW.frontEnd.title,
    company: WORK_PROJECTS_OVERVIEW.frontEnd.company,
    role: WORK_PROJECTS_OVERVIEW.frontEnd.role,
    years: WORK_PROJECTS_OVERVIEW.frontEnd.years,
    description: WORK_PROJECTS_OVERVIEW.frontEnd.description,
    skillsIcons: iconsSkillsProjectsWorkSmartsuppWeb,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [
          SkillsEnum.JavaScript,
          SkillsEnum.PHP,
          SkillsEnum.SASS,
          SkillsEnum.BEM,
          SkillsEnum.Cypress,
        ],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Design,
        skillsList: [SkillsEnum.UX, SkillsEnum.AdobeXD, SkillsEnum.ResponsiveDesign],
      },
      { id: 2, description: SkillCategoryEnum.Other, skillsList: [SkillsEnum.Trello] },
    ],
    linkText: WORK_PROJECTS_OVERVIEW.frontEnd.linkText,
    projectLinks: WORK_PROJECTS_OVERVIEW.frontEnd.projectLinks,
    customers: WORK_PROJECTS_OVERVIEW.frontEnd.customers,
    linkProjectPage: WORK_PROJECTS_OVERVIEW.frontEnd.linkProjectPage,
  },
]
