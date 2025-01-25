import { iconsSkillsProjectsPersonalCryptomania } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// project images
import cryptomania3 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-1-dark.webp'
import cryptomania1 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-1-light.webp'
import cryptomania4 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-2-dark.webp'
import cryptomania2 from '@/public/images/webp/projects/personal/cryptomania/cryptomania-2-light.webp'
import cryptomaniaThumb from '@/public/images/webp/projects/personal/cryptomania/cryptomania-thumb.webp'

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
    ],
    title: '💰 CryptoMania',
    company: 'Personal project',
    role: 'Front End - React',
    description:
      'Crypto currency prices app fetching latest data from CoinGecko API. This is fun little project created in Chakra UI with dark mode available.',
    skillsIcons: iconsSkillsProjectsPersonalCryptomania,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [SkillsEnum.TypeScript, SkillsEnum.React, SkillsEnum.ChakraUI, SkillsEnum.CoinGeckoAPI],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Other,
        skillsList: [SkillsEnum.Netlify],
      },
    ],
    linkText: 'Project details',
    projectLinks: [
      { urlText: 'Website', url: 'https://cryptocurrency-prices-one.vercel.app/', dataTestId: 'cryptomania' },
    ],
    linkGitHub: 'https://github.com/krsiakdaniel/cryptocurrency-prices',
    personalProjectNote: 'Project to exercise coding.',
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
]
