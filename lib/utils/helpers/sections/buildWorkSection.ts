import { Section } from '@/lib/types/interfaces'

import { WorkSection } from './buildWorkSection.types'

export const buildWorkSection = (sectionsData: Record<string, WorkSection>): Section[] =>
  Object.values(sectionsData).map((section, sectionIndex) => ({
    id: sectionIndex,
    title: section.title,
    titleHighlight: section.titleHighlight ?? '',
    items: section.items.map((text, itemIndex) => ({ id: `${sectionIndex}-${itemIndex}`, text })),
  }))
