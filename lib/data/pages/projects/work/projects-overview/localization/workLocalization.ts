import { iconsSkillsProjectsWorkMoravia } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
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
    icon: ICON_EMOJI.globeShowingAmericas,
    title: 'Windows',
    company: 'RWS - Moravia IT',
    role: 'QA Automation - Team Leader',
    years: '1 year',
    description:
      'Worked\u00A0on\u00A0localization testing for Microsoft Windows 8 + Windows Phone. I\u00A0had\u00A0an\u00A0amazing chance to be team leader on Microsoft products.',
    skillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.HTML, SkillsEnum.CSS, SkillsEnum.JavaScript, SkillsEnum.AutoHotkey],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.rws.com/', dataTestId: 'rws' }],
    customers: '80 out of the world top 100 brands',
    linkProjectPage: PAGES_URL.work.moravia,
  },
]
