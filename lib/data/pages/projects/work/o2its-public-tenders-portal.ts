import { PROJECTS_WORK } from '@/localization/data/projects/workProjects'

import { Section } from '@/lib/types/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.O2itsPublicTendersPortal.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.O2itsPublicTendersPortal.sections.responsibility.items[0],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.O2itsPublicTendersPortal.sections.features.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.O2itsPublicTendersPortal.sections.features.items[0],
      },
      {
        id: '1-1',
        text: PROJECTS_WORK.O2itsPublicTendersPortal.sections.features.items[1],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.O2itsPublicTendersPortal.sections.note.title,
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.O2itsPublicTendersPortal.sections.note.items[0],
      },
    ],
  },
]
