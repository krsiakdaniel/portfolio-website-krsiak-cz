import { iconsSkillsProjectsWorkSmartsuppHelp } from '@/lib/data/skills/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { Project } from '@/lib/utils/interfaces/interfaces'

// smartsupp help
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import smartsuppHelp1 from '@/public/images/projects/work/smartsupp-help/smartsupp-help-1-light.png'
import smartsuppHelp2 from '@/public/images/projects/work/smartsupp-help/smartsupp-help-2-light.png'
import smartsuppHelp3 from '@/public/images/projects/work/smartsupp-help/smartsupp-help-3-light.png'
import smartsuppHelpThumb from '@/public/images/projects/work/smartsupp-help/smartsupp-help-thumb-light-600.webp'

export const projectsWorkWordPress: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.help,
    isFeatured: false,
    image: smartsuppHelpThumb.src,
    imageShowcase: [
      { id: 0, src: smartsuppHelp1.src },
      { id: 1, src: smartsuppHelp2.src },
      { id: 2, src: smartsuppHelp3.src },
    ],
    title: '📚 SaaS Company - HELP Website',
    company: 'Smartsupp',
    role: 'Admin & Content Writer',
    years: '6\u00A0months',
    description:
      'Responsible for the company HELP website running on WordPress and\u00A0writing tutorials. Localization into 9 languages.',
    mySkillsIcons: iconsSkillsProjectsWorkSmartsuppHelp,
    skillsOverview: [
      {
        id: 0,
        description: 'Frontend',
        skillsList: ['JavaScript', 'WordPress', 'PHP'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://help.smartsupp.com/' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.help,
  },
]
