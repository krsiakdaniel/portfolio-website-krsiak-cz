import { Project } from '@/utils/types'

import cryptomania1 from '@/public/images/projects-personal/png/cryptomania-1.png'
import cryptomania2 from '@/public/images/projects-personal/png/cryptomania-2.png'
import cryptomania3 from '@/public/images/projects-personal/png/cryptomania-3.png'
import cryptomania4 from '@/public/images/projects-personal/png/cryptomania-4.png'
import cryptomania5 from '@/public/images/projects-personal/png/cryptomania-5.png'
import cryptomania6 from '@/public/images/projects-personal/png/cryptomania-6.png'
import cryptomaniaThumb from '@/public/images/projects-personal/png/cryptomania-thumb.png'

import krsiak1 from '@/public/images/projects-personal/png/krsiak-1.png'
import krsiak2 from '@/public/images/projects-personal/png/krsiak-2.png'
import krsiakThumb from '@/public/images/projects-personal/png/krsiak-thumb.png'

import eshop1 from '@/public/images/projects-personal/png/eshop-1.png'
import eshop2 from '@/public/images/projects-personal/png/eshop-2.png'
import eshop3 from '@/public/images/projects-personal/png/eshop-3.png'
import eshop4 from '@/public/images/projects-personal/png/eshop-4.png'
import eshopThumb from '@/public/images/projects-personal/png/eshop-thumb.png'

// BUG: somehow I map on the pages different texts, check both PERSONAL and WORK
export const projectsPersonal: Project[] = [
  {
    id: 1,
    isFeatured: true,
    image: krsiakThumb.src,
    imageShowcase: [krsiak1.src, krsiak2.src],
    title: '👨‍💻 Portfolio Website',
    role: 'Next.js App',
    description: 'My personal portfolio website to showcase my work and skills.',
    mySkills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
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
    description: 'Crypto currency prices using CoinGecko API. UI has dark mode.',
    mySkills: ['JavaScript', 'TypeScript', 'React', 'React App', 'Chakra UI', 'CoinGecko API'],
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
    description: 'Simple eCommerce website. First time coding with Vue and Nuxt.',
    mySkills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'Vuetify'],
    linkText: 'Read more →',
    projectLinks: [{ urlText: 'Website →', url: 'https://ecommerce-vue-nuxt.onrender.com/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/ecommerce-website-vuejs-nuxtjs-vuetify',
    linkProjectPage: '/project-personal-eshop',
  },
]
