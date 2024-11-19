import {
  iconsSkillsProjectsPersonalCryptomania,
  iconsSkillsProjectsPersonalKrsiak,
} from '@/data/skills/skills-projects-personal'
import { Project } from '@/utils/types'

// project images
import krsiak1 from '@/public/images/projects-personal/krsiak/krsiak-1-light.png'
import krsiak2 from '@/public/images/projects-personal/krsiak/krsiak-2-light.png'
import krsiak3 from '@/public/images/projects-personal/krsiak/krsiak-3-light.png'
import krsiak4 from '@/public/images/projects-personal/krsiak/krsiak-4-light.png'
import krsiak5 from '@/public/images/projects-personal/krsiak/krsiak-5-light.png'
import krsiakThumb from '@/public/images/projects-personal/krsiak/krsiak-thumb-light-600.webp'

import cryptomania4 from '@/public/images/projects-personal/cryptomania/cryptomania-1-dark.png'
import cryptomania1 from '@/public/images/projects-personal/cryptomania/cryptomania-1-light.png'
import cryptomania5 from '@/public/images/projects-personal/cryptomania/cryptomania-2-dark.png'
import cryptomania2 from '@/public/images/projects-personal/cryptomania/cryptomania-2-light.png'
import cryptomania6 from '@/public/images/projects-personal/cryptomania/cryptomania-3-dark.png'
import cryptomania3 from '@/public/images/projects-personal/cryptomania/cryptomania-3-light.png'
import cryptomaniaThumb from '@/public/images/projects-personal/cryptomania/cryptomania-thumb-light-600.webp'

import { PAGES_URL, PROJECT_ID } from '@/utils/constants'

export const projectsPersonalNext: Project[] = [
  {
    id: PROJECT_ID.personal.krsiak,
    isFeatured: true,
    image: krsiakThumb.src,
    imageShowcase: [krsiak1.src, krsiak2.src, krsiak3.src, krsiak4.src, krsiak5.src],
    title: '👨‍💻 Portfolio Website',
    company: 'Personal project',
    role: 'Front End - Next.js',
    description:
      'My personal portfolio website to showcase my work and skills. The\u00A0latest iteration of what I know and can code as React Developer.',
    mySkillsIcons: iconsSkillsProjectsPersonalKrsiak,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      { description: 'Other', skills: ['JEST', 'Playwright', 'GitHub Actions', 'Netlify'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://krsiak.cz/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    linkProjectPage: PAGES_URL.personal.krsiak,
  },
]

export const projectsPersonalReact: Project[] = [
  {
    id: PROJECT_ID.personal.cryptoMania,
    isFeatured: false,
    image: cryptomaniaThumb.src,
    imageShowcase: [
      cryptomania1.src,
      cryptomania2.src,
      cryptomania3.src,
      cryptomania4.src,
      cryptomania5.src,
      cryptomania6.src,
    ],
    title: '💰 CryptoMania',
    company: 'Personal project',
    role: 'Front End - React',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This is fun little project created in Chakra UI with dark mode available.',
    mySkillsIcons: iconsSkillsProjectsPersonalCryptomania,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'React App', 'Chakra UI', 'CoinGecko API'],
      },
      { description: 'Other', skills: ['Netlify'] },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://cryptocurrency-prices-one.vercel.app/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
]
