import { iconsSkillsProjectsWorkO2its } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD_OVERVIEW } from '@/localization/pages/projects/work-o2its-ai-powered-chat-dashboard'

// o2its ai-powered chat dashboard
import o2itsAiPoweredChatDashboard from '@/public/images/webp/projects/work/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-1.webp'
import o2itsAiPoweredChatDashboardProjectPreview from '@/public/images/webp/projects/work/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

const overview = PROJECTS_WORK_O2ITS_AI_CHAT_DASHBOARD_OVERVIEW

export const workNextO2itsAiPoweredChatDashboard: Project = {
  id: PROJECT_ID.work.o2itsAiPoweredChatDashboard,
  isFeatured: false,
  image: o2itsAiPoweredChatDashboardProjectPreview.src,
  galleryImages: [
    {
      id: 0,
      src: o2itsAiPoweredChatDashboard.src,
      width: o2itsAiPoweredChatDashboard.width,
      height: o2itsAiPoweredChatDashboard.height,
    },
  ],
  icon: ICON_EMOJI.robot,
  ariaLabel: ARIA_LABELS.emoji.robot,
  title: overview.title,
  company: overview.company,
  role: overview.role,
  years: overview.years,
  description: overview.description,
  skillsIcons: iconsSkillsProjectsWorkO2its,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Next,
        SkillsEnum.MaterialUI,
        SkillsEnum.ReactHookForm,
        SkillsEnum.Zod,
        SkillsEnum.GraphQL,
        SkillsEnum.Zustand,
      ],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.UX, SkillsEnum.Figma, SkillsEnum.ResponsiveDesign],
    },
    {
      id: 2,
      description: SkillCategoryEnum.AI,
      skillsList: [SkillsEnum.AI],
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
