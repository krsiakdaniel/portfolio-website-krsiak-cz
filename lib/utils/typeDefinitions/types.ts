import { SkillCategoryEnum, SkillIconEnum } from '@/lib/utils/typeDefinitions/enums'

// Breadcrumbs
export type BreadCrumbsType = {
  level1Url: string
  level1Icon: string
  level1AriaLabel: string
  level1Text: string
  level2Url?: string
  level2Icon?: string
  level2AriaLabel?: string
  level2Text?: string
}

// Get Menu Link ID
export type GetMenuLinkIDType = {
  isMobile: boolean
  linkID: string
}

// Skills
export type SkillCategoryType =
  | SkillCategoryEnum.Design
  | SkillCategoryEnum.FrontEnd
  | SkillCategoryEnum.Other

// Skill Icon
export type SkillIconType =
  | SkillIconEnum.Chakra
  | SkillIconEnum.CSS
  | SkillIconEnum.Cypress
  | SkillIconEnum.Figma
  | SkillIconEnum.GithubActions
  | SkillIconEnum.Graphql
  | SkillIconEnum.HTML
  | SkillIconEnum.JavaScript
  | SkillIconEnum.Jest
  | SkillIconEnum.Netlify
  | SkillIconEnum.Next
  | SkillIconEnum.PHP
  | SkillIconEnum.Playwright
  | SkillIconEnum.React
  | SkillIconEnum.Redux
  | SkillIconEnum.Scss
  | SkillIconEnum.Storybook
  | SkillIconEnum.Sketch
  | SkillIconEnum.Tailwind
  | SkillIconEnum.TypeScript
  | SkillIconEnum.WordPress
  | SkillIconEnum.XD

// PARAGRAPH
// Import typography design tokens
import { TextSizeType, TextColorType, MarginTopType } from '@/lib/design-tokens/typography'

// Re-export typography types for compatibility
export type { TextSizeType, TextColorType, MarginTopType }

// Define the type for the setLunarPhaseEmoji function
export type SetLunarPhaseEmoji = (emoji: string) => void
