import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { WORK_PROJECTS_OVERVIEW } from '@/localization/data/projects/workProjects'

// o2its ai-powered chat dashboard
import o2itsAiPoweredChatDashboard from '@/public/images/webp/projects/work/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-1.webp'
import o2itsAiPoweredChatDashboardProjectPreview from '@/public/images/webp/projects/work/o2its-ai-powered-chat-dashboard/o2its-ai-powered-chat-dashboard-project-preview.webp'

import { iconsSkillsProjectsWorkO2its } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'
import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

export const workNextO2itsAiPoweredChatDashboard: Project = {
  id: PROJECT_ID.work.o2itsAiPoweredChatDashboard,
  isFeatured: false,
  image: o2itsAiPoweredChatDashboardProjectPreview.src,
  galleryImages: [{ id: 0, src: o2itsAiPoweredChatDashboard.src }],
  icon: ICON_EMOJI.robot,
  ariaLabel: ARIA_LABELS.emoji.robot,
  title: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.title,
  company: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.company,
  role: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.role,
  years: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.years,
  description: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.description,
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
    {
      id: 3,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Jira],
    },
  ],
  linkText: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.linkText,
  projectLinks: [
    {
      urlText: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.projectLinks[0].urlText,
      url: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.projectLinks[0].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.projectLinks[0].dataTestId,
    },
  ],
  customers: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.customers,
  linkProjectPage: WORK_PROJECTS_OVERVIEW.O2itsAiPoweredChatDashboard.linkProjectPage,
}
