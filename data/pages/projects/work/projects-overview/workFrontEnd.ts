import { iconsSkillsProjectsWorkSmartsuppWeb } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

import { PROJECTS_WORK_SMARTSUPP_WEB_OVERVIEW } from '@/localization/pages/projects/work-smartsupp-web'

// smartsupp web
import smartsuppWeb1 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-1-light.webp'
import smartsuppWeb2 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-2-light.webp'
import smartsuppWeb3 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-3-light.webp'
import smartsuppWeb4 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-4-light.webp'
import smartsuppWebProjectPreview from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { type Project } from '@/lib/types/interfaces'

const overview = PROJECTS_WORK_SMARTSUPP_WEB_OVERVIEW

export const projectsWorkFrontEnd: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.web,
    isFeatured: true,
    image: smartsuppWebProjectPreview.src,
    galleryImages: [
      { id: 0, src: smartsuppWeb1.src, width: smartsuppWeb1.width, height: smartsuppWeb1.height },
      { id: 1, src: smartsuppWeb2.src, width: smartsuppWeb2.width, height: smartsuppWeb2.height },
      { id: 2, src: smartsuppWeb3.src, width: smartsuppWeb3.width, height: smartsuppWeb3.height },
      { id: 3, src: smartsuppWeb4.src, width: smartsuppWeb4.width, height: smartsuppWeb4.height },
    ],
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    ariaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    title: overview.title,
    company: overview.company,
    role: overview.role,
    years: overview.years,
    description: overview.description,
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
    linkText: overview.linkText,
    projectLinks: overview.projectLinks,
    customers: overview.customers,
    linkProjectPage: overview.linkProjectPage,
  },
]
