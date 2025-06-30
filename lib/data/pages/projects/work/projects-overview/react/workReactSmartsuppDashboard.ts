import { iconsSkillsProjectsWorkSmartsuppDashboard } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization/english'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp dashboard
import smartsuppDashboard1 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-1-light.webp'
import smartsuppDashboard2 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-2-light.webp'
import smartsuppDashboard3 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-3-light.webp'
import smartsuppDashboard4 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-4-light.webp'
import smartsuppDashboardProjectPreview from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-project-preview.webp'

export const workReactSmartsuppDashboard: Project = {
  id: PROJECT_ID.work.smartsupp.dashboard,
  isFeatured: true,
  image: smartsuppDashboardProjectPreview.src,
  galleryImages: [
    { id: 0, src: smartsuppDashboard1.src },
    { id: 1, src: smartsuppDashboard2.src },
    { id: 2, src: smartsuppDashboard3.src },
    { id: 4, src: smartsuppDashboard4.src },
  ],
  icon: ICON_EMOJI.speechBalloon,
  ariaLabel: ARIA_LABELS.emoji.speechBalloon,
  title: TEXT.customerCareChatDashboard,
  company: WORK_PROJECTS_OVERVIEW.reactDashboard.company,
  role: WORK_PROJECTS_OVERVIEW.reactDashboard.role,
  years: WORK_PROJECTS_OVERVIEW.reactDashboard.years,
  description: WORK_PROJECTS_OVERVIEW.reactDashboard.description,
  skillsIcons: iconsSkillsProjectsWorkSmartsuppDashboard,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Redux,
        SkillsEnum.ChakraUI,
        SkillsEnum.Cypress,
        SkillsEnum.PairProgramming,
      ],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.UX, SkillsEnum.AdobeXD, SkillsEnum.ResponsiveDesign],
    },
    {
      id: 2,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Trello],
    },
  ],
  linkText: WORK_PROJECTS_OVERVIEW.reactDashboard.linkText,
  projectLinks: [
    {
      urlText: WORK_PROJECTS_OVERVIEW.reactDashboard.projectLinks[0].urlText,
      url: WORK_PROJECTS_OVERVIEW.reactDashboard.projectLinks[0].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.reactDashboard.projectLinks[0].dataTestId,
    },
  ],
  customers: WORK_PROJECTS_OVERVIEW.reactDashboard.customers,
  linkProjectPage: WORK_PROJECTS_OVERVIEW.reactDashboard.linkProjectPage,
}
