import { iconsSkillsProjectsWorkSmartsuppWeb } from '@/data/skills/skillsProjectsWork'
import { PROJECT_ID } from '@/utils/constants/ids/projectIds'
import { Project } from '@/utils/interfaces'

// smartsupp web
import smartsuppWeb1 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-1-light.png'
import smartsuppWeb2 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-2-light.png'
import smartsuppWeb3 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-3-light.png'
import smartsuppWeb4 from '@/public/images/projects-work/smartsupp-web/smartsupp-web-4-light.png'
import smartsuppWebThumb from '@/public/images/projects-work/smartsupp-web/smartsupp-web-thumb-light-600.webp'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

export const projectsWorkFrontEnd: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.web,
    isFeatured: false,
    image: smartsuppWebThumb.src,
    imageShowcase: [
      { id: 1, src: smartsuppWeb1.src },
      { id: 2, src: smartsuppWeb2.src },
      { id: 3, src: smartsuppWeb3.src },
      { id: 4, src: smartsuppWeb4.src },
    ],
    title: '💻 SaaS Company - Website',
    company: 'Smartsupp',
    role: 'Front End Developer',
    years: '1\u00A0year',
    description:
      'I created the company website Front End. I worked closely with the\u00A0main UX designer on new brand color theme and layout decisions.',
    mySkillsIcons: iconsSkillsProjectsWorkSmartsuppWeb,
    skillsOverview: [
      { id: 1, description: 'Frontend', skillsList: ['JavaScript', 'PHP', 'SASS', 'BEM', 'Cypress'] },
      { id: 2, description: 'Design', skillsList: ['UX', 'Adobe XD', 'Responsive Design'] },
      { id: 3, description: 'Other', skillsList: ['Trello'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://www.smartsupp.com/' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.web,
  },
]
