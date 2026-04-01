import { Section } from '@/lib/types/interfaces'

import { SectionInput } from './buildSections.types'

export const buildSections = (sectionsData: Record<string, SectionInput>): Section[] =>
  Object.values(sectionsData).map((section, sectionIndex) => ({
    id: sectionIndex,
    title: section.title,
    titleHighlight: section.titleHighlight ?? '',
    items: section.items.map((text, itemIndex) => ({ id: `${sectionIndex}-${itemIndex}`, text })),
  }))
