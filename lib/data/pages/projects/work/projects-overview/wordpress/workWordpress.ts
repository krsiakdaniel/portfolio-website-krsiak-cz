import { iconsSkillsProjectsWorkSmartsuppHelp } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization/english'
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// smartsupp help
import smartsuppHelp1 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-1-light.webp'
import smartsuppHelp2 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-2-light.webp'
import smartsuppHelp3 from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-3-light.webp'
import smartsuppHelpProjectPreview from '@/public/images/webp/projects/work/smartsupp-help/smartsupp-help-project-preview.webp'

export const projectsWorkWordPress: Project[] = [
  {
    id: PROJECT_ID.work.smartsupp.help,
    isFeatured: false,
    image: smartsuppHelpProjectPreview.src,
    galleryImages: [
      { id: 0, src: smartsuppHelp1.src },
      { id: 1, src: smartsuppHelp2.src },
      { id: 2, src: smartsuppHelp3.src },
    ],
    icon: ICON_EMOJI.books,
    ariaLabel: ARIA_LABELS.emoji.books,
    title: WORK_PROJECTS_OVERVIEW.wordPress.title,
    company: WORK_PROJECTS_OVERVIEW.wordPress.company,
    role: WORK_PROJECTS_OVERVIEW.wordPress.role,
    years: WORK_PROJECTS_OVERVIEW.wordPress.years,
    description: WORK_PROJECTS_OVERVIEW.wordPress.description,
    skillsIcons: iconsSkillsProjectsWorkSmartsuppHelp,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.JavaScript, SkillsEnum.PHP, SkillsEnum.WordPress],
      },
    ],
    linkText: WORK_PROJECTS_OVERVIEW.wordPress.linkText,
    projectLinks: WORK_PROJECTS_OVERVIEW.wordPress.projectLinks,
    customers: WORK_PROJECTS_OVERVIEW.wordPress.customers,
    linkProjectPage: WORK_PROJECTS_OVERVIEW.wordPress.linkProjectPage,
  },
]
