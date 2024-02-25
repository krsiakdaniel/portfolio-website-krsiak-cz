import { Project } from '@/utils/types'

import image1 from '../public/images/projects-personal/png/personal-1-thumb.png'
import image2 from '../public/images/projects-personal/png/personal-2-thumb.png'
import image3 from '../public/images/projects-personal/png/personal-3-thumb.png'

export const projectsPersonal: Project[] = [
  {
    id: 1,
    image: image1.src,
    imageShowcase: [image1.src, image2.src, image3.src],
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
    image: image2.src,
    imageShowcase: [image1.src, image2.src, image3.src],
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
    image: image3.src,
    imageShowcase: [image1.src, image2.src, image3.src],
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
