import { SkillCategoryEnum, SkillIconEnum } from '@/lib/utils/typeDefinitions/enums'

// Breadcrumbs
export type BreadCrumbsType = {
  level1Text: string
  level1Url: string
  level2Text?: string
  level2Url?: string
}

// Get Menu Link ID
export type GetMenuLinkIDType = {
  isMobile: boolean
  linkID: string
}

// Skills
export type SkillCategoryType = SkillCategoryEnum.Design | SkillCategoryEnum.FrontEnd | SkillCategoryEnum.Other

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
// Define possible margin top values
export type MarginTopType = 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'

// Define possible text colors
export type TextColorType = 'text-neutral-500' | 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'

// Define possible text sizes
export type TextSizeType = 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'
