import { iconsSkillsProjectsPersonalCryptomania } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { Project } from '@/lib/utils/interfaces/interfaces'

// project images
import cryptomania4 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-1-dark.webp'
import cryptomania1 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-1-light.webp'
import cryptomania5 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-2-dark.webp'
import cryptomania2 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-2-light.webp'
import cryptomania6 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-3-dark.webp'
import cryptomania3 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-3-light.webp'
import cryptomaniaThumb from '@/public/images/webp/projects/personal/cryptomania/cryptomania-thumb-light-600.webp'

export const projectsPersonalReact: Project[] = [
  {
    id: PROJECT_ID.personal.cryptoMania,
    isFeatured: false,
    image: cryptomaniaThumb.src,
    imageShowcase: [
      { id: 0, src: cryptomania1.src },
      { id: 1, src: cryptomania2.src },
      { id: 2, src: cryptomania3.src },
      { id: 3, src: cryptomania4.src },
      { id: 4, src: cryptomania5.src },
      { id: 5, src: cryptomania6.src },
    ],
    title: '💰 CryptoMania',
    company: 'Personal project',
    role: 'Front End - React',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This is fun little project created in Chakra UI with dark mode available.',
    mySkillsIcons: iconsSkillsProjectsPersonalCryptomania,
    skillsOverview: [
      {
        id: 0,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'React App', 'Chakra UI', 'CoinGecko API'],
      },
      {
        id: 1,
        description: 'Other',
        skillsList: ['Netlify'],
      },
    ],
    linkText: 'Project details',
    projectLinks: [{ urlText: 'Website →', url: 'https://cryptocurrency-prices-one.vercel.app/' }],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
]
