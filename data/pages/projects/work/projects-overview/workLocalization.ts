import { iconsSkillsProjectsWorkMoravia } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

// moravia
import { PROJECTS_WORK_MORAVIA_OVERVIEW } from '@/localization/pages/projects/work-moravia'

import moravia1 from '@/public/images/webp/projects/work/moravia/moravia-1-light.webp'
import moravia2 from '@/public/images/webp/projects/work/moravia/moravia-2-light.webp'
import moravia3 from '@/public/images/webp/projects/work/moravia/moravia-3-light.webp'
import moraviaProjectPreview from '@/public/images/webp/projects/work/moravia/moravia-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { type Project } from '@/lib/types/interfaces'

const overview = PROJECTS_WORK_MORAVIA_OVERVIEW

export const projectsWorkLocalization: Project[] = [
  {
    id: PROJECT_ID.work.moravia,
    isFeatured: false,
    image: moraviaProjectPreview.src,
    galleryImages: [
      { id: 0, src: moravia1.src, width: moravia1.width, height: moravia1.height },
      { id: 1, src: moravia2.src, width: moravia2.width, height: moravia2.height },
      { id: 2, src: moravia3.src, width: moravia3.width, height: moravia3.height },
    ],
    icon: ICON_EMOJI.globeShowingAmericas,
    ariaLabel: ARIA_LABELS.emoji.globe.showingAmericas,
    title: overview.title,
    company: overview.company,
    role: overview.role,
    years: overview.years,
    description: overview.description,
    skillsIcons: iconsSkillsProjectsWorkMoravia,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.HTML, SkillsEnum.CSS, SkillsEnum.JavaScript, SkillsEnum.AutoHotkey],
      },
    ],
    linkText: overview.linkText,
    projectLinks: overview.projectLinks,
    customers: overview.customers,
    linkProjectPage: overview.linkProjectPage,
  },
]
