import { PROJECTS_WORK } from '@/localization/data/projects/workProjects'

import { Section } from '@/lib/types/interfaces'

const data = PROJECTS_WORK.O2itsPublicTendersPortal.sections

export const sections: Section[] = [
  {
    id: 0,
    title: data.responsibility.title,
    titleHighlight: '',
    items: data.responsibility.items.map((text, i) => ({ id: `0-${i}`, text })),
  },
  {
    id: 1,
    title: data.features.title,
    titleHighlight: '',
    items: data.features.items.map((text, i) => ({ id: `1-${i}`, text })),
  },
  {
    id: 2,
    title: data.note.title,
    titleHighlight: '',
    items: data.note.items.map((text, i) => ({ id: `2-${i}`, text })),
  },
]
