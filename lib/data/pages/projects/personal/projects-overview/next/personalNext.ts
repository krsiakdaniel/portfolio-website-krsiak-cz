import { iconsSkillsProjectsPersonalKrsiak } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// project images
import krsiak1 from '@/public/images/webp/projects/personal/krsiak/krsiak-1-light.webp'
import krsiak2 from '@/public/images/webp/projects/personal/krsiak/krsiak-2-light.webp'
import krsiak3 from '@/public/images/webp/projects/personal/krsiak/krsiak-3-light.webp'
import krsiak4 from '@/public/images/webp/projects/personal/krsiak/krsiak-4-light.webp'
import krsiakThumb from '@/public/images/webp/projects/personal/krsiak/krsiak-thumb.webp'

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.krsiak,
    isFeatured: true,
    image: krsiakThumb.src,
    imageShowcase: [
      { id: 0, src: krsiak1.src },
      { id: 1, src: krsiak2.src },
      { id: 2, src: krsiak3.src },
      { id: 3, src: krsiak4.src },
    ],
    title: '👨🏻‍💻 Portfolio Website',
    company: 'Personal project',
    role: 'Front End - Next.js',
    description:
      'My personal portfolio website to showcase my work and skills. The\u00A0latest iteration of what I know and can code as React Developer.',
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
        skillsList: [SkillsEnum.Jest, SkillsEnum.Playwright, SkillsEnum.GithubActions, SkillsEnum.Netlify],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website', url: 'https://krsiak.cz/', dataTestId: 'krsiak' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    personalProjectNote: 'My main coding project.',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
]
