import { PROJECTS_WORK } from '@/localization/english-texts-data'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.smartsuppWordPress.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.smartsuppWordPress.sections.responsibility.items[0],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.smartsuppWordPress.sections.tutorials.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.smartsuppWordPress.sections.tutorials.items[0],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.smartsuppWordPress.sections.localization.title,
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.smartsuppWordPress.sections.localization.items[0],
      },
    ],
  },
]
