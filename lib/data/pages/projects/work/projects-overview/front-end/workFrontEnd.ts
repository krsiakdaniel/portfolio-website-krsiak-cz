import { iconsSkillsProjectsWorkSmartsuppWeb } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp web
import smartsuppWeb1 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-1-light.webp'
import smartsuppWeb2 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-2-light.webp'
import smartsuppWeb3 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-3-light.webp'
import smartsuppWeb4 from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-4-light.webp'
import smartsuppWebThumb from '@/public/images/webp/projects/work/smartsupp-web/smartsupp-web-thumb.webp'

export const projectsWorkFrontEnd: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.web,
    isFeatured: false,
    image: smartsuppWebThumb.src,
    imageShowcase: [
      { id: 0, src: smartsuppWeb1.src },
      { id: 1, src: smartsuppWeb2.src },
      { id: 2, src: smartsuppWeb3.src },
      { id: 3, src: smartsuppWeb4.src },
    ],
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    title: 'SaaS Company - Website',
    company: 'Smartsupp',
    role: 'Front End Developer',
    years: '1\u00A0year',
    description:
      'I created the company website Front End. I worked closely with the\u00A0main UX designer on new brand color theme and layout decisions.',
    skillsIcons: iconsSkillsProjectsWorkSmartsuppWeb,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.JavaScript, SkillsEnum.PHP, SkillsEnum.SASS, SkillsEnum.BEM, SkillsEnum.Cypress],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Design,
        skillsList: [SkillsEnum.UX, SkillsEnum.AdobeXD, SkillsEnum.ResponsiveDesign],
      },
      { id: 2, description: SkillCategoryEnum.Other, skillsList: [SkillsEnum.Trello] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.smartsupp.com/', dataTestId: 'smartsupp-web' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.web,
  },
]
