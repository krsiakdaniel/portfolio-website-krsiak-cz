import { iconsSkillsProjectsWorkSmartsuppDashboard } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/interfaces/interfaces'

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
  title: '💬 Customer Care - Chat Dashboard',
  company: 'Smartsupp',
  role: 'React Developer',
  years: '3\u00A0years 2\u00A0months',
  description:
    'I worked on chat dashboard features and new design, including redesign of settings. I was involved in UX team to learn.',
  mySkillsIcons: iconsSkillsProjectsWorkSmartsuppDashboard,
  skillsOverview: [
    {
      id: 0,
      description: 'Frontend',
      skillsList: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Chakra UI', 'Cypress', 'Pair Programming'],
    },
    { id: 1, description: 'Design', skillsList: ['UX', 'Adobe XD', 'Responsive Design'] },
    { id: 2, description: 'Other', skillsList: ['Trello'] },
  ],
  linkText: 'Project details',
  projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/live-chat-for-customer-care-teams/' }],
  customers: '100 000+',
  linkProjectPage: PAGES_URL.work.smartsupp.dashboard,
}
