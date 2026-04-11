import {
  iconsSkillsProjectsPersonalKoreanEasy,
  iconsSkillsProjectsPersonalKrsiak,
} from '@/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { PROJECTS_PERSONAL_KOREAN_EASY_OVERVIEW } from '@/localization/pages/projects/personal-korean-easy'
import { PROJECTS_PERSONAL_KRSIAK_OVERVIEW } from '@/localization/pages/projects/personal-krsiak'

// project images - korean easy
import koreanEasy1 from '@/public/images/webp/projects/personal/korean-easy/korean-easy-1.webp'
import koreanEasy2 from '@/public/images/webp/projects/personal/korean-easy/korean-easy-2.webp'
import koreanEasy3 from '@/public/images/webp/projects/personal/korean-easy/korean-easy-3.webp'
import koreanEasy4 from '@/public/images/webp/projects/personal/korean-easy/korean-easy-4.webp'
import koreanEasyProjectPreview from '@/public/images/webp/projects/personal/korean-easy/korean-easy-project-preview.webp'
// project images - krsiak
import krsiak1 from '@/public/images/webp/projects/personal/krsiak/krsiak-1.webp'
import krsiak2 from '@/public/images/webp/projects/personal/krsiak/krsiak-2.webp'
import krsiak3 from '@/public/images/webp/projects/personal/krsiak/krsiak-3.webp'
import krsiak4 from '@/public/images/webp/projects/personal/krsiak/krsiak-4.webp'
import krsiakProjectPreview from '@/public/images/webp/projects/personal/krsiak/krsiak-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { Project } from '@/lib/types/interfaces'
import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

const koreanEasyOverview = PROJECTS_PERSONAL_KOREAN_EASY_OVERVIEW
const krsiakOverview = PROJECTS_PERSONAL_KRSIAK_OVERVIEW

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.koreanEasy,
    isFeatured: false,
    image: koreanEasyProjectPreview.src,
    galleryImages: [
      { id: 0, src: koreanEasy1.src, width: koreanEasy1.width, height: koreanEasy1.height },
      { id: 1, src: koreanEasy2.src, width: koreanEasy2.width, height: koreanEasy2.height },
      { id: 2, src: koreanEasy3.src, width: koreanEasy3.width, height: koreanEasy3.height },
      { id: 3, src: koreanEasy4.src, width: koreanEasy4.width, height: koreanEasy4.height },
    ],
    icon: ICON_EMOJI.flagSouthKorea,
    ariaLabel: ARIA_LABELS.emoji.flag.southKorea,
    title: koreanEasyOverview.title,
    company: koreanEasyOverview.company,
    role: koreanEasyOverview.role,
    description: koreanEasyOverview.description,
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
    linkText: koreanEasyOverview.linkText,
    projectLinks: [
      {
        urlText: koreanEasyOverview.projectLinks[0].urlText,
        url: koreanEasyOverview.projectLinks[0].url,
        dataTestId: koreanEasyOverview.projectLinks[0].dataTestId,
      },
    ],
    personalProjectNote: koreanEasyOverview.personalProjectNote,
    linkProjectPage: PAGES_URL.personalKoreanEasy,
  },
  {
    id: PROJECT_ID.personal.krsiak,
    isFeatured: true,
    image: krsiakProjectPreview.src,
    galleryImages: [
      { id: 0, src: krsiak1.src, width: krsiak1.width, height: krsiak1.height },
      { id: 1, src: krsiak2.src, width: krsiak2.width, height: krsiak2.height },
      { id: 2, src: krsiak3.src, width: krsiak3.width, height: krsiak3.height },
      { id: 3, src: krsiak4.src, width: krsiak4.width, height: krsiak4.height },
    ],
    icon: ICON_EMOJI.manTechnologist.lightSkinTone,
    ariaLabel: ARIA_LABELS.emoji.manTechnologist.lightSkinTone,
    title: krsiakOverview.title,
    company: krsiakOverview.company,
    role: krsiakOverview.role,
    description: krsiakOverview.description,
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
    linkText: krsiakOverview.linkText,
    projectLinks: [
      {
        urlText: krsiakOverview.projectLinks[0].urlText,
        url: krsiakOverview.projectLinks[0].url,
        dataTestId: krsiakOverview.projectLinks[0].dataTestId,
      },
    ],
    linkGitHub: krsiakOverview.linkGitHub,
    personalProjectNote: krsiakOverview.personalProjectNote,
    linkProjectPage: PAGES_URL.personalKrsiak,
  },
]
