import { iconsSkillsProjectsWorkSmartsuppHelp } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { PROJECTS_WORK_SMARTSUPP_HELP_OVERVIEW } from '@/localization/pages/projects/work-smartsupp-help'

// smartsupp help
import smartsuppHelp1 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-1-light.webp'
import smartsuppHelp2 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-2-light.webp'
import smartsuppHelp3 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-3-light.webp'
import smartsuppHelpProjectPreview from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

const overview = PROJECTS_WORK_SMARTSUPP_HELP_OVERVIEW

export const projectsWorkWordPress: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.help,
    isFeatured: false,
    image: smartsuppHelpProjectPreview.src,
    galleryImages: [
      {
        id: 0,
        src: smartsuppHelp1.src,
        width: smartsuppHelp1.width,
        height: smartsuppHelp1.height,
      },
      {
        id: 1,
        src: smartsuppHelp2.src,
        width: smartsuppHelp2.width,
        height: smartsuppHelp2.height,
      },
      {
        id: 2,
        src: smartsuppHelp3.src,
        width: smartsuppHelp3.width,
        height: smartsuppHelp3.height,
      },
    ],
    icon: ICON_EMOJI.books,
    ariaLabel: ARIA_LABELS.emoji.books,
    title: overview.title,
    company: overview.company,
    role: overview.role,
    years: overview.years,
    description: overview.description,
    skillsIcons: iconsSkillsProjectsWorkSmartsuppHelp,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.JavaScript, SkillsEnum.PHP, SkillsEnum.WordPress],
      },
    ],
    linkText: overview.linkText,
    projectLinks: overview.projectLinks,
    customers: overview.customers,
    linkProjectPage: overview.linkProjectPage,
  },
]
