import { Section } from '@/lib/utils/typeDefinitions/interfaces'
import { PROJECTS_WORK } from '@/localization/english-texts-data'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.kb.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.kb.sections.responsibility.items[0],
      },
      {
        id: '0-1',
        text: PROJECTS_WORK.kb.sections.responsibility.items[1],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.kb.sections.features.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.kb.sections.features.items[0],
      },
      {
        id: '1-1',
        text: PROJECTS_WORK.kb.sections.features.items[1],
      },
      {
        id: '1-2',
        text: PROJECTS_WORK.kb.sections.features.items[2],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.kb.sections.responsive.title,
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.kb.sections.responsive.items[0],
      },
      {
        id: '2-1',
        text: PROJECTS_WORK.kb.sections.responsive.items[1],
      },
    ],
  },
]
