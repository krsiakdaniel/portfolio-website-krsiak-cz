import { iconsSkillsProjectsWorkKomercniBanka } from '@/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { ARIA_LABELS, ICON_EMOJI } from '@/localization'

import { PROJECTS_WORK_KOMERCNI_BANKA_OVERVIEW } from '@/localization/pages/projects/work-komercni-banka'

// komercni banka
import komercniBanka1 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-1-light.webp'
import komercniBanka2 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-2-light.webp'
import komercniBanka3 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-3-light.webp'
import komercniBanka4 from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-4-light.webp'
import komercniBankaProjectPreview from '@/public/images/webp/projects/work/komercni-banka/komercni-banka-project-preview.webp'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/types/enums'
import { type Project } from '@/lib/types/interfaces'

const overview = PROJECTS_WORK_KOMERCNI_BANKA_OVERVIEW

export const workReactKomercniBanka: Project = {
  id: PROJECT_ID.work.komercniBanka,
  isFeatured: false,
  image: komercniBankaProjectPreview.src,
  galleryImages: [
    { id: 0, src: komercniBanka1.src, width: komercniBanka1.width, height: komercniBanka1.height },
    { id: 1, src: komercniBanka2.src, width: komercniBanka2.width, height: komercniBanka2.height },
    { id: 2, src: komercniBanka3.src, width: komercniBanka3.width, height: komercniBanka3.height },
    { id: 3, src: komercniBanka4.src, width: komercniBanka4.width, height: komercniBanka4.height },
  ],
  icon: ICON_EMOJI.bank,
  ariaLabel: ARIA_LABELS.emoji.bank,
  title: overview.title,
  company: overview.company,
  role: overview.role,
  years: overview.years,
  description: overview.description,
  skillsIcons: iconsSkillsProjectsWorkKomercniBanka,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [
        SkillsEnum.TypeScript,
        SkillsEnum.React,
        SkillsEnum.Tailwind,
        SkillsEnum.PairProgramming,
      ],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.Figma, SkillsEnum.ResponsiveDesign],
    },
    {
      id: 2,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Jira, SkillsEnum.Confluence, SkillsEnum.Tempo, SkillsEnum.Kentico],
    },
  ],
  linkText: overview.linkText,
  projectLinks: [
    {
      urlText: overview.projectLinks[0].urlText,
      url: overview.projectLinks[0].url,
      dataTestId: overview.projectLinks[0].dataTestId,
    },
    {
      urlText: overview.projectLinks[1].urlText,
      url: overview.projectLinks[1].url,
      dataTestId: overview.projectLinks[1].dataTestId,
    },
    {
      urlText: overview.projectLinks[2].urlText,
      url: overview.projectLinks[2].url,
      dataTestId: overview.projectLinks[2].dataTestId,
    },
    {
      urlText: overview.projectLinks[3].urlText,
      url: overview.projectLinks[3].url,
      dataTestId: overview.projectLinks[3].dataTestId,
    },
  ],
  customers: overview.customers,
  linkProjectPage: PAGES_URL.workKomercniBanka,
}
