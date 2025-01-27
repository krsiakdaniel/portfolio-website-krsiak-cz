import { iconsSkillsProjectsWorkGroupon } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// groupon
import groupon1 from '@/public/images/webp/projects/work/groupon/groupon-1-light.webp'
import groupon2 from '@/public/images/webp/projects/work/groupon/groupon-2-light.webp'
import grouponThumb from '@/public/images/webp/projects/work/groupon/groupon-thumb.webp'

export const projectsWorkQA: Project[] = [
  {
    id: PROJECT_ID.work.groupon,
    isFeatured: false,
    image: grouponThumb.src,
    imageShowcase: [
      { id: 0, src: groupon1.src },
      { id: 1, src: groupon2.src },
    ],
    icon: ICON_EMOJI.shoppingCart,
    title: 'E-Commerce - Marketplace',
    company: 'Groupon',
    role: 'QA Automation - Team Leader',
    years: '4\u00A0months',
    description:
      'I was responsible setting up new QA team, hiring and managing people. Setting up QA processes, writing test plans, and testing scripts.',
    skillsIcons: iconsSkillsProjectsWorkGroupon,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Next, SkillsEnum.Playwright],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Design,
        skillsList: [SkillsEnum.Figma, SkillsEnum.Storybook],
      },
      {
        id: 2,
        description: SkillCategoryEnum.Other,
        skillsList: [
          SkillsEnum.Jira,
          SkillsEnum.Confluence,
          SkillsEnum.Tempo,
          SkillsEnum.QA,
          SkillsEnum.TeamManagement,
        ],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://www.groupon.com/', dataTestId: 'groupon' }],
    customers: '17 000 000+',
    linkProjectPage: PAGES_URL.work.groupon,
  },
]
