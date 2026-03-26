import { Section } from '@/lib/utils/typeDefinitions/interfaces'

import { PROJECTS_PERSONAL } from '@/localization/data/projects/personalProjects'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_PERSONAL.koreanEasy.title,
    titleHighlight: PROJECTS_PERSONAL.koreanEasy.titleHighlight,
    items: [
      {
        id: '0-0',
        text: PROJECTS_PERSONAL.koreanEasy.items[0].text,
      },
    ],
  },
]
