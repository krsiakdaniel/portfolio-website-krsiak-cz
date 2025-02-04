import { PROJECTS_PERSONAL } from '@/localization/english-texts-data'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_PERSONAL.cryptoMania.title,
    titleHighlight: PROJECTS_PERSONAL.cryptoMania.titleHighlight,
    items: [
      {
        id: '0-0',
        text: PROJECTS_PERSONAL.cryptoMania.items[0].text,
      },
    ],
  },
]
