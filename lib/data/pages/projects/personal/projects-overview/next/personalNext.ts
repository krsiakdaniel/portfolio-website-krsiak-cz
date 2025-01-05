import { iconsSkillsProjectsPersonalKrsiak } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/interfaces/interfaces'

// project images
import krsiak1 from '@/public/images/webp/projects/personal/krsiak/krsiak-1-light.webp'
import krsiak2 from '@/public/images/webp/projects/personal/krsiak/krsiak-2-light.webp'
import krsiak3 from '@/public/images/webp/projects/personal/krsiak/krsiak-3-light.webp'
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
    ],
    title: '👨🏻‍💻 Portfolio Website',
    company: 'Personal project',
    role: 'Front End - Next.js',
    description:
      'My personal portfolio website to showcase my work and skills. The\u00A0latest iteration of what I know and can code as React Developer.',
    mySkillsIcons: iconsSkillsProjectsPersonalKrsiak,
    skillsOverview: [
      {
        id: 0,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        id: 1,
        description: 'Other',
        skillsList: ['JEST', 'Playwright', 'GitHub Actions', 'Netlify'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://krsiak.cz/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    personalProjectNote: 'My main coding project.',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
]
