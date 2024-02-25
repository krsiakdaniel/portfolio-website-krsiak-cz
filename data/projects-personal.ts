import { Project } from '@/utils/types'

import cryptomaniaThumb from '../public/images/projects-personal/png/cryptomania-thumb.png'
import cryptomania1 from '../public/images/projects-personal/png/cryptomania-1.png'

import krsiakThumb from '../public/images/projects-personal/png/krsiak-thumb.png'
import krsiak1 from '../public/images/projects-personal/png/krsiak-1.png'

import eshopThumb from '../public/images/projects-personal/png/eshop-thumb.png'
import eshop1 from '../public/images/projects-personal/png/eshop-1.png'

export const projectsPersonal: Project[] = [
  {
    id: 1,
    image: krsiakThumb.src,
    imageShowcase: [krsiak1.src],
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description: 'My personal portfolio website to showcase my work and skills.',
    mySkills: 'JavaScript · TypeScript · Next.js · Tailwind CSS',
    linkText: 'Read more →',
    link: [''],
    customers: '',
    linkProjectPage: '',
  },
  {
    id: 2,
    image: cryptomaniaThumb.src,
    imageShowcase: [cryptomania1.src],
    title: '💰 CryptoMania',
    role: 'React App',
    description: 'Crypto currency price tracker using CoinGecko API.',
    mySkills: 'JavaScript · TypeScript · React App · Chakra UI · CoinGecko API',
    linkText: 'Read more →',
    link: ['https://cryptomania-currency-prices.netlify.app/'],
    customers: '',
    linkProjectPage: '',
  },
  {
    id: 3,
    image: eshopThumb.src,
    imageShowcase: [eshop1.src],
    title: '🛒 eCommerce Website',
    role: 'Vue.js App',
    description: 'Simple eCommerce website. First time coding with Vue and Nuxt.',
    mySkills: 'JavaScript · Vue.js · Nuxt.js · Vuetify',
    linkText: 'Read more →',
    link: ['https://ecommerce-vue-nuxt.onrender.com/'],
    customers: '',
    linkProjectPage: '',
  },
]
