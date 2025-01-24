// Breadcrumbs
export type BreadCrumbsType = {
  level1Text: string
  level1Url: string
  level2Text?: string
  level2Url?: string
}

// Menu Mobile Toggle
export type HandleMenuMobileToggleType = () => void

// Skills
export type SkillCategoryType = 'Design' | 'Frontend' | 'Other'

// PARAGRAPH
// Define possible margin top values
export type MarginTopType = 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'

// Define possible text colors
export type TextColorType = 'text-neutral-500' | 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'

// Define possible text sizes
export type TextSizeType = 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'
