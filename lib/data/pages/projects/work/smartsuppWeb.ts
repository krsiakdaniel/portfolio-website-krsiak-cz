import { PROJECTS_WORK } from '@/localization/english-texts-data'

import { Section } from '@/lib/utils/typeDefinitions/interfaces'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.smartsuppWeb.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.smartsuppWeb.sections.responsibility.items[0],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.smartsuppWeb.sections.website.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.smartsuppWeb.sections.website.items[0],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.smartsuppWeb.sections.docs.title,
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.smartsuppWeb.sections.docs.items[0],
      },
    ],
  },
]
