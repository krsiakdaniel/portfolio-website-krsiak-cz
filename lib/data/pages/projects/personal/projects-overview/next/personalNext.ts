import { iconsSkillsProjectsPersonalKrsiak } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization/english'
import { PROJECTS_PERSONAL_OVERVIEW } from '@/localization/english-texts-data'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// project images
import krsiak1 from '@/public/images/webp/projects/personal/krsiak/krsiak-1-light.webp'
import krsiak2 from '@/public/images/webp/projects/personal/krsiak/krsiak-2-light.webp'
import krsiak3 from '@/public/images/webp/projects/personal/krsiak/krsiak-3-light.webp'
import krsiak4 from '@/public/images/webp/projects/personal/krsiak/krsiak-4-light.webp'
import krsiakProjectPreview from '@/public/images/webp/projects/personal/krsiak/krsiak-project-preview.webp'

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.krsiak,
    isFeatured: true,
    image: krsiakProjectPreview.src,
    galleryImages: [
      { id: 0, src: krsiak1.src },
      { id: 1, src: krsiak2.src },
      { id: 2, src: krsiak3.src },
      { id: 3, src: krsiak4.src },
    ],
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    ariaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    title: PROJECTS_PERSONAL_OVERVIEW.next.title,
    company: PROJECTS_PERSONAL_OVERVIEW.next.company,
    role: PROJECTS_PERSONAL_OVERVIEW.next.role,
    description: PROJECTS_PERSONAL_OVERVIEW.next.description,
    skillsIcons: iconsSkillsProjectsPersonalKrsiak,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Next, SkillsEnum.Tailwind],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Other,
        skillsList: [
          SkillsEnum.Jest,
          SkillsEnum.Playwright,
          SkillsEnum.GithubActions,
          SkillsEnum.Netlify,
        ],
      },
    ],
    linkText: PROJECTS_PERSONAL_OVERVIEW.next.linkText,
    projectLinks: [
      {
        urlText: PROJECTS_PERSONAL_OVERVIEW.next.projectLinks[0].urlText,
        url: PROJECTS_PERSONAL_OVERVIEW.next.projectLinks[0].url,
        dataTestId: PROJECTS_PERSONAL_OVERVIEW.next.projectLinks[0].dataTestId,
      },
    ],
    linkGitHub: PROJECTS_PERSONAL_OVERVIEW.next.linkGitHub,
    personalProjectNote: PROJECTS_PERSONAL_OVERVIEW.next.personalProjectNote,
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
]
