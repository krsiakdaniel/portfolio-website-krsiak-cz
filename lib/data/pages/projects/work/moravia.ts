import { Section } from '@/lib/utils/typeDefinitions/interfaces'
import { PROJECTS_WORK } from '@/localization/english-texts-data'

export const sections: Section[] = [
  {
    id: 0,
    title: PROJECTS_WORK.moraviaManager.sections.responsibility.title,
    titleHighlight: '',
    items: [
      {
        id: '0-0',
        text: PROJECTS_WORK.moraviaManager.sections.responsibility.items[0],
      },
    ],
  },
  {
    id: 1,
    title: PROJECTS_WORK.moraviaManager.sections.delivery.title,
    titleHighlight: '',
    items: [
      {
        id: '1-0',
        text: PROJECTS_WORK.moraviaManager.sections.delivery.items[0],
      },
    ],
  },
  {
    id: 2,
    title: PROJECTS_WORK.moraviaManager.sections.automation.title,
    titleHighlight: '',
    items: [
      {
        id: '2-0',
        text: PROJECTS_WORK.moraviaManager.sections.automation.items[0],
      },
    ],
  },
]
