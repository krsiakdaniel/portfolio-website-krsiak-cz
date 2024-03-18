import {
  iconsSkillsProjectsPersonalCryptomania,
  iconsSkillsProjectsPersonalEshop,
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

import eshop1 from '@/public/images/projects-personal/eshop/eshop-1-light.png'
import eshop2 from '@/public/images/projects-personal/eshop/eshop-2-light.png'
import eshop3 from '@/public/images/projects-personal/eshop/eshop-3-light.png'
import eshop4 from '@/public/images/projects-personal/eshop/eshop-4-light.png'
import eshopThumb from '@/public/images/projects-personal/eshop/eshop-thumb-light-600.webp'
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
    projectLinks: [{ urlText: 'Website →', url: 'https://cryptomania-currency-prices.netlify.app/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
]

export const projectsPersonalVue: Project[] = [
  {
    id: PROJECT_ID.personal.eshop,
    isFeatured: false,
    image: eshopThumb.src,
    imageShowcase: [eshop1.src, eshop2.src, eshop3.src, eshop4.src],
    title: '🛒 E-Commerce Website',
    company: 'Personal project',
    role: 'Front End - Vue.js',
    description:
      'Simple E-Commerce website. First time coding with Vue and Nuxt. Used\u00A0Vuetify for styling. Exercise in creating Vue project.',
    mySkillsIcons: iconsSkillsProjectsPersonalEshop,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Vuetify'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://ecommerce-vue-nuxt.onrender.com/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/ecommerce-website-vuejs-nuxtjs-vuetify',
    linkProjectPage: PAGES_URL.personal.eshop,
  },
]
