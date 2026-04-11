import { type Section } from '@/lib/types/interfaces'

import { type WorkSection } from './buildWorkSection.types'

export const buildWorkSection = (sectionsData: Record<string, WorkSection>): Section[] =>
  Object.values(sectionsData).map((section, sectionIndex) => ({
    id: sectionIndex,
    title: section.title,
    titleHighlight: section.titleHighlight ?? '',
    items: section.items.map((item, itemIndex) => {
      if (typeof item === 'string') {
        return { id: `${sectionIndex}-${itemIndex}`, text: item }
      }
      return { id: `${sectionIndex}-${itemIndex}`, text: item.text, flags: item.flags }
    }),
  }))
