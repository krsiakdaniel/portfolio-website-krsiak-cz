import { iconsSkillsProjectsWorkKooperativa } from '@/lib/data/pages/projects/work/projects-overview/skillsProjectsWork'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// kooperativa
import kooperativa1 from '@/public/images/webp/projects/work/kooperativa/kooperativa-1-light.webp'
import kooperativa2 from '@/public/images/webp/projects/work/kooperativa/kooperativa-2-light.webp'
import kooperativa3 from '@/public/images/webp/projects/work/kooperativa/kooperativa-3-light.webp'
import kooperativaThumb from '@/public/images/webp/projects/work/kooperativa/kooperativa-thumb.webp'

export const workReactKooperativa: Project = {
  id: PROJECT_ID.work.kooperativa,
  isFeatured: false,
  image: kooperativaThumb.src,
  imageShowcase: [
    { id: 0, src: kooperativa1.src },
    { id: 1, src: kooperativa2.src },
    { id: 2, src: kooperativa3.src },
  ],
  icon: ICON_EMOJI.umbrellaWithRainDrops,
  title: 'Insurance company app',
  company: 'Kooperativa',
  role: 'React Developer',
  years: '8\u00A0months',
  description:
    'I worked on an application for managing insurance policies for citizens. Kooperativa has over 2 480 000+ customers in Czech Republic.',
  skillsIcons: iconsSkillsProjectsWorkKooperativa,
  skillsOverview: [
    {
      id: 0,
      description: SkillCategoryEnum.FrontEnd,
      skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.Redux, SkillsEnum.Tailwind],
    },
    {
      id: 1,
      description: SkillCategoryEnum.Design,
      skillsList: [SkillsEnum.Figma, SkillsEnum.Storybook],
    },
    {
      id: 2,
      description: SkillCategoryEnum.Other,
      skillsList: [SkillsEnum.Jira, SkillsEnum.Confluence],
    },
  ],
  linkText: 'Project details',
  projectLinks: [
    { urlText: 'Website', url: 'https://www.koop.cz/pojisteni/pojisteni-majetku', dataTestId: 'kooperativa' },
  ],
  customers: '2 480 000+',
  linkProjectPage: PAGES_URL.work.kooperativa,
}
