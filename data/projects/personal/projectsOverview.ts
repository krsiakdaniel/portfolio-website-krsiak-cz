import {
  iconsSkillsProjectsPersonal1,
  iconsSkillsProjectsPersonal2,
  iconsSkillsProjectsPersonal3,
} from '@/data/skills/skills-projects-personal'
import { Project } from '@/utils/types'

// project images
import krsiak1 from '@/public/images/projects-personal/png/krsiak-1-light.png'
import krsiak2 from '@/public/images/projects-personal/png/krsiak-2-light.png'
import krsiakThumb from '@/public/images/projects-personal/png/krsiak-thumb-light.png'

import cryptomania4 from '@/public/images/projects-personal/png/cryptomania-1-dark.png'
import cryptomania1 from '@/public/images/projects-personal/png/cryptomania-1-light.png'
import cryptomania5 from '@/public/images/projects-personal/png/cryptomania-2-dark.png'
import cryptomania2 from '@/public/images/projects-personal/png/cryptomania-2-light.png'
import cryptomania6 from '@/public/images/projects-personal/png/cryptomania-3-dark.png'
import cryptomania3 from '@/public/images/projects-personal/png/cryptomania-3-light.png'
import cryptomaniaThumb from '@/public/images/projects-personal/png/cryptomania-thumb-light.png'

import eshop1 from '@/public/images/projects-personal/png/eshop-1-light.png'
import eshop2 from '@/public/images/projects-personal/png/eshop-2-light.png'
import eshop3 from '@/public/images/projects-personal/png/eshop-3-light.png'
import eshop4 from '@/public/images/projects-personal/png/eshop-4-light.png'
import eshopThumb from '@/public/images/projects-personal/png/eshop-thumb-light.png'

export const projectsPersonal: Project[] = [
  {
    id: 1,
    isFeatured: true,
    image: krsiakThumb.src,
    imageShowcase: [krsiak1.src, krsiak2.src],
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description:
      'My personal portfolio website to showcase my work and skills. The latest iteration of what I know and can code as React Developer.',
    mySkillsIcons: iconsSkillsProjectsPersonal1,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      },
      { description: 'Other', skills: ['Netlify'] },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://krsiak.cz/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/portfolio-website-krsiak-cz',
    linkProjectPage: '/project-personal-krsiak',
  },
  {
    id: 2,
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
    role: 'React App',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This is fun little project created in Chakra UI with dark mode available.',
    mySkillsIcons: iconsSkillsProjectsPersonal2,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'TypeScript', 'React', 'React App', 'Chakra UI', 'CoinGecko API'],
      },
      { description: 'Other', skills: ['Netlify'] },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://cryptomania-currency-prices.netlify.app/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    linkProjectPage: '/project-personal-cryptomania',
  },
  {
    id: 3,
    isFeatured: false,
    image: eshopThumb.src,
    imageShowcase: [eshop1.src, eshop2.src, eshop3.src, eshop4.src],
    title: '🛒 eCommerce Website',
    role: 'Vue.js App',
    description:
      'Simple eCommerce website. First time coding with Vue and Nuxt. Used Vuetify for styling. Exercise in creating Vue project.',
    mySkillsIcons: iconsSkillsProjectsPersonal3,
    mySkills: [
      {
        description: 'Frontend',
        skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Vuetify'],
      },
    ],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://ecommerce-vue-nuxt.onrender.com/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/ecommerce-website-vuejs-nuxtjs-vuetify',
    linkProjectPage: '/project-personal-eshop',
  },
]
