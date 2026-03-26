import {
  iconsSkillsProjectsPersonalKoreanEasy,
  iconsSkillsProjectsPersonalKrsiak,
} from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

import { PROJECTS_PERSONAL_OVERVIEW } from '@/localization/data/projects/personalProjects'

// project images
import krsiak1 from '@/public/images/webp/projects/personal/krsiak/krsiak-1-light.webp'
import krsiak2 from '@/public/images/webp/projects/personal/krsiak/krsiak-2-light.webp'
import krsiak3 from '@/public/images/webp/projects/personal/krsiak/krsiak-3-light.webp'
import krsiak4 from '@/public/images/webp/projects/personal/krsiak/krsiak-4-light.webp'
import krsiakProjectPreview from '@/public/images/webp/projects/personal/krsiak/krsiak-project-preview.webp'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.koreanEasy,
    isFeatured: true,
    image: 'https://placehold.co/600x400',
    galleryImages: [
      { id: 0, src: 'https://placehold.co/600x400' },
      { id: 1, src: 'https://placehold.co/600x400' },
      { id: 2, src: 'https://placehold.co/600x400' },
      { id: 3, src: 'https://placehold.co/600x400' },
    ],
    icon: ICON_EMOJI.flagSouthKorea,
    ariaLabel: ARIA_LABELS.emoji.flag.southKorea,
    title: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.title,
    company: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.company,
    role: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.role,
    description: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.description,
    skillsIcons: iconsSkillsProjectsPersonalKoreanEasy,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [
          SkillsEnum.TypeScript,
          SkillsEnum.React,
          SkillsEnum.Next,
          SkillsEnum.Tailwind,
          SkillsEnum.Zustand,
          SkillsEnum.ShadcnUI,
          SkillsEnum.Zod,
        ],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Other,
        skillsList: [SkillsEnum.Playwright, SkillsEnum.Vercel],
      },
    ],
    linkText: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.linkText,
    projectLinks: [
      {
        urlText: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.projectLinks[0].urlText,
        url: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.projectLinks[0].url,
        dataTestId: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.projectLinks[0].dataTestId,
      },
    ],
    personalProjectNote: PROJECTS_PERSONAL_OVERVIEW.koreanEasy.personalProjectNote,
    linkProjectPage: PAGES_URL.personalKoreanEasy,
  },
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
    linkProjectPage: PAGES_URL.personalKrsiak,
  },
]
