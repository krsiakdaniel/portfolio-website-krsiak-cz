import { iconsSkillsProjectsWorkO2itsPublicTendersPortal } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

import { PROJECTS_WORK_O2ITS_PUBLIC_TENDERS_PORTAL_OVERVIEW } from '@/localization/pages/projects/work-o2its-public-tenders-portal'

// o2its public tenders portal
import o2itsPublicTendersPortal from '@/public/images/webp/projects/work/o2its-public-tenders-portal/o2its-public-tenders-portal-1.webp'
import o2itsPublicTendersPortalProjectPreview from '@/public/images/webp/projects/work/o2its-public-tenders-portal/o2its-public-tenders-portal-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { type Project } from '@/lib/types/interfaces'

const overview = PROJECTS_WORK_O2ITS_PUBLIC_TENDERS_PORTAL_OVERVIEW

export const workViteO2itsPublicTendersPortal: Project = {
  id: PROJECT_ID.work.o2itsPublicTendersPortal,
  isFeatured: false,
  image: o2itsPublicTendersPortalProjectPreview.src,
  galleryImages: [
    {
      id: 0,
      src: o2itsPublicTendersPortal.src,
      width: o2itsPublicTendersPortal.width,
      height: o2itsPublicTendersPortal.height,
    },
  ],
  icon: ICON_EMOJI.robot,
  ariaLabel: ARIA_LABELS.emoji.robot,
  title: overview.title,
  company: overview.company,
  role: overview.role,
  years: overview.years,
  description: overview.description,
  skillsIcons: iconsSkillsProjectsWorkO2itsPublicTendersPortal,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Vite,
        SkillsEnum.MaterialUI,
        SkillsEnum.ReactHookForm,
        SkillsEnum.Zod,
      ],
    },
    {
      id: 1,
      description: SkillCategoryEnum.AI,
      skillsList: [SkillsEnum.AI],
    },
  ],
  linkText: overview.linkText,
  customers: overview.customers,
  linkProjectPage: overview.linkProjectPage,
}
