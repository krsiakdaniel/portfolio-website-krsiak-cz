import { iconsSkillsProjectsPersonalCryptomania } from '@/lib/data/pages/projects/personal/projects-overview/skillsProjectsPersonal'

import { ICON_EMOJI } from '@/localization/english'

import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { SkillCategoryEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { Project } from '@/lib/utils/typeDefinitions/interfaces'

// project images
import { PROJECTS_PERSONAL_OVERVIEW } from '@/localization/english-texts-data'
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
    galleryImages: [
      { id: 0, src: cryptomania1.src },
      { id: 1, src: cryptomania2.src },
      { id: 2, src: cryptomania3.src },
      { id: 3, src: cryptomania4.src },
    ],
    icon: ICON_EMOJI.moneyBag,
    title: PROJECTS_PERSONAL_OVERVIEW.react.title,
    company: PROJECTS_PERSONAL_OVERVIEW.react.company,
    role: PROJECTS_PERSONAL_OVERVIEW.react.role,
    description: PROJECTS_PERSONAL_OVERVIEW.react.description,
    skillsIcons: iconsSkillsProjectsPersonalCryptomania,
    skillsOverview: [
      {
        id: 0,
        description: SkillCategoryEnum.FrontEnd,
        skillsList: [
          SkillsEnum.TypeScript,
          SkillsEnum.React,
          SkillsEnum.ChakraUI,
          SkillsEnum.CoinGeckoAPI,
        ],
      },
      {
        id: 1,
        description: SkillCategoryEnum.Other,
        skillsList: [SkillsEnum.Netlify],
      },
    ],
    linkText: PROJECTS_PERSONAL_OVERVIEW.react.linkText,
    projectLinks: [
      {
        urlText: PROJECTS_PERSONAL_OVERVIEW.react.projectLinks[0].urlText,
        url: PROJECTS_PERSONAL_OVERVIEW.react.projectLinks[0].url,
        dataTestId: PROJECTS_PERSONAL_OVERVIEW.react.projectLinks[0].dataTestId,
      },
    ],
    linkGitHub: PROJECTS_PERSONAL_OVERVIEW.react.linkGitHub,
    personalProjectNote: PROJECTS_PERSONAL_OVERVIEW.react.personalProjectNote,
    linkProjectPage: PAGES_URL.personal.cryptoMania,
  },
]
