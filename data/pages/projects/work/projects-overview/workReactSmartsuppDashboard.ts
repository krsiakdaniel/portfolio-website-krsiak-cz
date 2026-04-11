import { iconsSkillsProjectsWorkSmartsuppDashboard } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { PROJECTS_WORK_SMARTSUPP_DASHBOARD_OVERVIEW } from '@/localization/pages/projects/work-smartsupp-dashboard'

// smartsupp dashboard
import smartsuppDashboard1 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-1-light.webp'
import smartsuppDashboard2 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-2-light.webp'
import smartsuppDashboard3 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-3-light.webp'
import smartsuppDashboard4 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-4-light.webp'
import smartsuppDashboardProjectPreview from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

const overview = PROJECTS_WORK_SMARTSUPP_DASHBOARD_OVERVIEW

export const workReactSmartsuppDashboard: Project = {
  id: PROJECT_ID.work.smartsupp.dashboard,
  isFeatured: true,
  image: smartsuppDashboardProjectPreview.src,
  galleryImages: [
    {
      id: 0,
      src: smartsuppDashboard1.src,
      width: smartsuppDashboard1.width,
      height: smartsuppDashboard1.height,
    },
    {
      id: 1,
      src: smartsuppDashboard2.src,
      width: smartsuppDashboard2.width,
      height: smartsuppDashboard2.height,
    },
    {
      id: 2,
      src: smartsuppDashboard3.src,
      width: smartsuppDashboard3.width,
      height: smartsuppDashboard3.height,
    },
    {
      id: 4,
      src: smartsuppDashboard4.src,
      width: smartsuppDashboard4.width,
      height: smartsuppDashboard4.height,
    },
  ],
  icon: ICON_EMOJI.speechBalloon,
  ariaLabel: ARIA_LABELS.emoji.speechBalloon,
  title: TEXT.customerCareChatDashboard,
  company: overview.company,
  role: overview.role,
  years: overview.years,
  description: overview.description,
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
  linkText: overview.linkText,
  projectLinks: [
    {
      urlText: overview.projectLinks[0].urlText,
      url: overview.projectLinks[0].url,
      dataTestId: overview.projectLinks[0].dataTestId,
    },
  ],
  customers: overview.customers,
  linkProjectPage: overview.linkProjectPage,
}
