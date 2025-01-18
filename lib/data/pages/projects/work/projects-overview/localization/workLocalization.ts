import { iconsSkillsProjectsWorkMoravia } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// moravia
import moravia1 from '@/public/images/webp/projects/work/moravia/moravia-1-light.webp'
import moravia2 from '@/public/images/webp/projects/work/moravia/moravia-2-light.webp'
import moravia3 from '@/public/images/webp/projects/work/moravia/moravia-3-light.webp'
import moraviaThumb from '@/public/images/webp/projects/work/moravia/moravia-thumb.webp'

export const projectsWorkLocalization: Project[] = [
  {
    id: PROJECT_ID.work.moravia,
    isFeatured: true,
    image: moraviaThumb.src,
    imageShowcase: [
      { id: 0, src: moravia1.src },
      { id: 1, src: moravia2.src },
      { id: 2, src: moravia3.src },
    ],
    title: '🌎 Windows',
    company: 'RWS - Moravia IT',
    role: 'QA Automation - Team Leader',
    years: '1 year',
    description:
      'I had amazing chance to be team leader on Microsoft products, doing quality checks for Microsoft projects Windows 8 + Windows Phone.',
    mySkillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 0,
        description: 'Frontend',
        skillsList: ['HTML', 'CSS', 'JavaScript', 'AutoHotkey'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.rws.com/' }],
    customers: '80 out of the world top 100 brands',
    linkProjectPage: PAGES_URL.work.moravia,
  },
]
