import { iconsSkillsProjectsWorkSmartsuppDashboard } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp dashboard
import smartsuppDashboard1 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-1-light.webp'
import smartsuppDashboard2 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-2-light.webp'
import smartsuppDashboard3 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-3-light.webp'
import smartsuppDashboard4 from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-4-light.webp'
import smartsuppDashboardThumb from '@/public/images/webp/projects/work/smartsupp-dashboard/smartsupp-dashboard-thumb.webp'

export const workReactSmartsuppDashboard: Project = {
  id: PROJECT_ID.work.smartsupp.dashboard,
  isFeatured: true,
  image: smartsuppDashboardThumb.src,
  imageShowcase: [
    { id: 0, src: smartsuppDashboard1.src },
    { id: 1, src: smartsuppDashboard2.src },
    { id: 2, src: smartsuppDashboard3.src },
    { id: 4, src: smartsuppDashboard4.src },
  ],
  icon: ICON_EMOJI.speechBalloon,
  title: TEXT.customerCareChatDashboard,
  company: 'Smartsupp',
  role: 'React Developer',
  years: '3\u00A0years 2\u00A0months',
  description:
    'I worked on chat dashboard features and new design of settings. I\u00A0was\u00A0involved in UX team learning about user needs.',
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
  linkText: 'Project details',
  projectLinks: [
    {
      urlText: 'Website',
      url: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/',
      dataTestId: 'smartsupp-dashboard',
    },
  ],
  customers: '100 000+',
  linkProjectPage: PAGES_URL.work.smartsupp.dashboard,
}
