import { Section } from '@/lib/types/interfaces'

import { PersonalSection } from './buildPersonalSection.types'

export const buildPersonalSection = (project: PersonalSection): Section[] => [
  {
    id: 0,
    title: project.title,
    titleHighlight: project.titleHighlight ?? '',
    items: project.items.map(({ text }, index) => ({ id: `0-${index}`, text })),
  },
]
