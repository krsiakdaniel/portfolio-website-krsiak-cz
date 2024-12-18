import { iconsSkillsProjectsPersonalCryptomania } from '@/data/skills/skillsProjectsPersonal'
import { Project } from '@/utils/interfaces'

// project images
import cryptomania4 from '@/public/images/projects-personal/cryptomania/cryptomania-1-dark.png'
import cryptomania1 from '@/public/images/projects-personal/cryptomania/cryptomania-1-light.png'
import cryptomania5 from '@/public/images/projects-personal/cryptomania/cryptomania-2-dark.png'
import cryptomania2 from '@/public/images/projects-personal/cryptomania/cryptomania-2-light.png'
import cryptomania6 from '@/public/images/projects-personal/cryptomania/cryptomania-3-dark.png'
import cryptomania3 from '@/public/images/projects-personal/cryptomania/cryptomania-3-light.png'
import cryptomaniaThumb from '@/public/images/projects-personal/cryptomania/cryptomania-thumb-light-600.webp'

import { PROJECT_ID } from '@/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

export const projectsPersonalReact: Project[] = [
  {
    id: PROJECT_ID.personal.cryptoMania,
    isFeatured: false,
    image: cryptomaniaThumb.src,
    imageShowcase: [
      { id: 1, src: cryptomania1.src },
      { id: 2, src: cryptomania2.src },
      { id: 3, src: cryptomania3.src },
      { id: 4, src: cryptomania4.src },
      { id: 5, src: cryptomania5.src },
      { id: 6, src: cryptomania6.src },
    ],
    title: '💰 CryptoMania',
    company: 'Personal project',
    role: 'Front End - React',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This is fun little project created in Chakra UI with dark mode available.',
    mySkillsIcons: iconsSkillsProjectsPersonalCryptomania,
    skillsOverview: [
      {
        id: 1,
        description: 'Frontend',
        skillsList: ['JavaScript', 'TypeScript', 'React', 'React App', 'Chakra UI', 'CoinGecko API'],
      },
      {
        id: 2,
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
