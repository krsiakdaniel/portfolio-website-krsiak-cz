import { iconsSkillsProjectsWorkSmartsuppHelp } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp help
import smartsuppHelp1 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-1-light.webp'
import smartsuppHelp2 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-2-light.webp'
import smartsuppHelp3 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-3-light.webp'
import smartsuppHelpThumb from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-thumb.webp'

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
    icon: ICON_EMOJI.books,
    title: 'SaaS Company - HELP Website',
    company: 'Smartsupp',
    role: 'Admin &\u00A0Content Writer',
    years: '6\u00A0months',
    description:
      'Localization of the company HELP website into 9 languages. I\u00A0was\u00A0also\u00A0writing tutorials and creating content.',
    skillsIcons: iconsSkillsProjectsWorkSmartsuppHelp,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.JavaScript, SkillsEnum.PHP, SkillsEnum.WordPress],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://help.smartsupp.com/', dataTestId: 'smartsupp-help' }],
    customers: '100 000+',
    linkProjectPage: PAGES_URL.work.smartsupp.help,
  },
]
