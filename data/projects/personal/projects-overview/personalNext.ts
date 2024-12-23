import { iconsSkillsProjectsPersonalKrsiak } from '@/data/skills/skillsProjectsPersonal'
import { Project } from '@/utils/interfaces/interfaces'

// project images
import krsiak1 from '@/public/images/projects/personal/krsiak/krsiak-1-light.png'
import krsiak2 from '@/public/images/projects/personal/krsiak/krsiak-2-light.png'
import krsiak3 from '@/public/images/projects/personal/krsiak/krsiak-3-light.png'
import krsiak4 from '@/public/images/projects/personal/krsiak/krsiak-4-light.png'
import krsiak5 from '@/public/images/projects/personal/krsiak/krsiak-5-light.png'
import krsiakThumb from '@/public/images/projects/personal/krsiak/krsiak-thumb-light-600.webp'

import { PROJECT_ID } from '@/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.krsiak,
    isFeatured: true,
    image: krsiakThumb.src,
    imageShowcase: [
      { id: 1, src: krsiak1.src },
      { id: 2, src: krsiak2.src },
      { id: 3, src: krsiak3.src },
      { id: 4, src: krsiak4.src },
      { id: 5, src: krsiak5.src },
    ],
    title: '👨‍💻 Portfolio Website',
    company: 'Personal project',
    role: 'Front End - Next.js',
    description:
      'My personal portfolio website to showcase my work and skills. The\u00A0latest iteration of what I know and can code as React Developer.',
    mySkillsIcons: iconsSkillsProjectsPersonalKrsiak,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      {
        id: 2,
        description: 'Other',
        skillsList: ['JEST', 'Playwright', 'GitHub Actions', 'Netlify'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://krsiak.cz/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
]
