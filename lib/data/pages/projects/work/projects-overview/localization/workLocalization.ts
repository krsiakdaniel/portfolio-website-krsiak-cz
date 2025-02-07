import { iconsSkillsProjectsWorkMoravia } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// moravia
import { WORK_PROJECTS_OVERVIEW } from '@/localization/english-texts-data'
import moravia1 from '@/public/images/webp/projects/work/moravia/moravia-1-light.webp'
import moravia2 from '@/public/images/webp/projects/work/moravia/moravia-2-light.webp'
import moravia3 from '@/public/images/webp/projects/work/moravia/moravia-3-light.webp'
import moraviaProjectPreview from '@/public/images/webp/projects/work/moravia/moravia-project-preview.webp'

export const projectsWorkLocalization: Project[] = [
  {
    id: PROJECT_ID.work.moravia,
    isFeatured: true,
    image: moraviaProjectPreview.src,
    galleryImages: [
      { id: 0, src: moravia1.src },
      { id: 1, src: moravia2.src },
      { id: 2, src: moravia3.src },
    ],
    icon: ICON_EMOJI.globeShowingAmericas,
    title: WORK_PROJECTS_OVERVIEW.moravia.title,
    company: WORK_PROJECTS_OVERVIEW.moravia.company,
    role: WORK_PROJECTS_OVERVIEW.moravia.role,
    years: WORK_PROJECTS_OVERVIEW.moravia.years,
    description: WORK_PROJECTS_OVERVIEW.moravia.description,
    skillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.HTML, SkillsEnum.CSS, SkillsEnum.JavaScript, SkillsEnum.AutoHotkey],
      },
    ],
    linkText: WORK_PROJECTS_OVERVIEW.moravia.linkText,
    projectLinks: WORK_PROJECTS_OVERVIEW.moravia.projectLinks,
    customers: WORK_PROJECTS_OVERVIEW.moravia.customers,
    linkProjectPage: WORK_PROJECTS_OVERVIEW.moravia.linkProjectPage,
  },
]
