import { iconsSkillsProjectsWorkMoravia } from '@/data/skills/skillsProjectsWork'
import { PAGES_URL, PROJECT_ID } from '@/utils/constants'
import { Project } from '@/utils/interfaces'

// moravia
import moravia1 from '@/public/images/projects-work/moravia/moravia-1-light.png'
import moravia2 from '@/public/images/projects-work/moravia/moravia-2-light.png'
import moravia3 from '@/public/images/projects-work/moravia/moravia-3-light.png'
import moraviaThumb from '@/public/images/projects-work/moravia/moravia-thumb-light-600.webp'

export const projectsWorkLocalization: Project[] = [
  {
    id: PROJECT_ID.work.moravia,
    isFeatured: true,
    image: moraviaThumb.src,
    imageShowcase: [
      { id: 1, src: moravia1.src },
      { id: 2, src: moravia2.src },
      { id: 3, src: moravia3.src },
    ],
    title: '🖥️ Windows',
    company: 'RWS - Moravia IT',
    role: 'QA Automation - Team Leader',
    years: '1 year',
    description:
      'I had amazing chance to be team leader on Microsoft products, doing quality checks for Microsoft projects Windows 8 + Windows Phone.',
    mySkillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.rws.com/' }],
    customers: '80 out of the world top 100 brands',
    linkProjectPage: PAGES_URL.work.moravia,
  },
]