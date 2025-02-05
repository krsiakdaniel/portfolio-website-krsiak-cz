import { Section } from '@/lib/utils/typeDefinitions/interfaces'
import { PROJECTS_WORK } from '@/localization/english-texts-data'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.kooperativa.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.kooperativa.sections.responsibility.items[0],
      },
      {
        id: '0-1',
        text: PROJECTS_WORK.kooperativa.sections.responsibility.items[1],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.kooperativa.sections.features.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.kooperativa.sections.features.items[0],
      },
      {
        id: '1-1',
        text: PROJECTS_WORK.kooperativa.sections.features.items[1],
      },
      {
        id: '1-2',
        text: PROJECTS_WORK.kooperativa.sections.features.items[2],
      },
    ],
  },
]
