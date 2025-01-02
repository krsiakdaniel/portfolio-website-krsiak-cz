import { iconsSkillsProjectsWorkKooperativa } from '@/lib/data/skills/skillsProjectsWork'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/interfaces/interfaces'

// kooperativa
import kooperativa1 from '@/public/images/webp/projects/work/kooperativa/kooperativa-1-light.webp'
import kooperativa2 from '@/public/images/webp/projects/work/kooperativa/kooperativa-2-light.webp'
import kooperativa3 from '@/public/images/webp/projects/work/kooperativa/kooperativa-3-light.webp'
import kooperativaThumb from '@/public/images/webp/projects/work/kooperativa/kooperativa-thumb-light-600.webp'

export const workReactKooperativa: Project = {
  id: PROJECT_ID.work.kooperativa,
  isFeatured: false,
  image: kooperativaThumb.src,
  imageShowcase: [
    { id: 0, src: kooperativa1.src },
    { id: 1, src: kooperativa2.src },
    { id: 2, src: kooperativa3.src },
  ],
  title: '☔ Insurance company app',
  company: 'Kooperativa',
  role: 'React Developer',
  years: '8\u00A0months',
  description: 'I worked on an application for managing insurance policies for citizens property and products.',
  mySkillsIcons: iconsSkillsProjectsWorkKooperativa,
  skillsOverview: [
    {
      id: 0,
      description: 'Frontend',
      skillsList: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
    },
    { id: 1, description: 'Design', skillsList: ['Figma', 'Storybook'] },
    { id: 2, description: 'Other', skillsList: ['Jira', 'Confluence'] },
  ],
  linkText: 'Project details',
  projectLinks: [{ urlText: 'Website →', url: 'https://www.koop.cz/pojisteni/pojisteni-majetku' }],
  customers: '2 480 000+',
  linkProjectPage: PAGES_URL.work.kooperativa,
}
