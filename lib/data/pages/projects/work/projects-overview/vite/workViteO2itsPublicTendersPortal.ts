import { iconsSkillsProjectsWorkO2itsPublicTendersPortal } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

import { WORK_PROJECTS_OVERVIEW } from '@/localization/data/projects/workProjects'

// o2its public tenders portal
import o2itsPublicTendersPortal from '@/public/images/webp/projects/work/o2its-public-tenders-portal/o2its-public-tenders-portal-1.webp'
import o2itsPublicTendersPortalProjectPreview from '@/public/images/webp/projects/work/o2its-public-tenders-portal/o2its-public-tenders-portal-project-preview.webp'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

export const workViteO2itsPublicTendersPortal: Project = {
  id: PROJECT_ID.work.o2itsPublicTendersPortal,
  isFeatured: false,
  image: o2itsPublicTendersPortalProjectPreview.src,
  galleryImages: [{ id: 0, src: o2itsPublicTendersPortal.src }],
  icon: ICON_EMOJI.robot,
  ariaLabel: ARIA_LABELS.emoji.robot,
  title: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.title,
  company: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.company,
  role: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.role,
  years: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.years,
  description: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.description,
  skillsIcons: iconsSkillsProjectsWorkO2itsPublicTendersPortal,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
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
  linkText: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.linkText,
  projectLinks: [
    {
      urlText: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.projectLinks[0].urlText,
      url: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.projectLinks[0].url,
      dataTestId: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.projectLinks[0].dataTestId,
    },
  ],
  customers: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.customers,
  linkProjectPage: WORK_PROJECTS_OVERVIEW.O2itsPublicTendersPortal.linkProjectPage,
}
