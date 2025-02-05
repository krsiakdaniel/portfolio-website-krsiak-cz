import { PROJECTS_PERSONAL } from '@/localization/english-texts-data'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_PERSONAL.krsiak.title,
    titleHighlight: PROJECTS_PERSONAL.krsiak.titleHighlight,
    items: [
      {
        id: '0-0',
        text: PROJECTS_PERSONAL.krsiak.items[0].text,
      },
    ],
  },
]
