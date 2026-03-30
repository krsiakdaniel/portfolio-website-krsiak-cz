import { SkillCategoryEnum, SkillIconEnum } from '@/lib/types/enums'

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

// Skills
export type SkillCategoryType =
  | SkillCategoryEnum.AI
  | SkillCategoryEnum.Design
  | SkillCategoryEnum.FrontEnd
  | SkillCategoryEnum.Other

// Skill Icon
export type SkillIconType =
  | SkillIconEnum.AI
  | SkillIconEnum.Chakra
  | SkillIconEnum.CSS
  | SkillIconEnum.Cypress
  | SkillIconEnum.Figma
  | SkillIconEnum.GithubActions
  | SkillIconEnum.Graphql
  | SkillIconEnum.HTML
  | SkillIconEnum.JavaScript
  | SkillIconEnum.Jest
  | SkillIconEnum.MaterialUI
  | SkillIconEnum.Netlify
  | SkillIconEnum.Next
  | SkillIconEnum.PHP
  | SkillIconEnum.Playwright
  | SkillIconEnum.React
  | SkillIconEnum.ReactHookForm
  | SkillIconEnum.Redux
  | SkillIconEnum.Scss
  | SkillIconEnum.ShadcnUI
  | SkillIconEnum.Storybook
  | SkillIconEnum.Sketch
  | SkillIconEnum.Tailwind
  | SkillIconEnum.TypeScript
  | SkillIconEnum.Vercel
  | SkillIconEnum.Vite
  | SkillIconEnum.WordPress
  | SkillIconEnum.XD
  | SkillIconEnum.Zod
  | SkillIconEnum.Zustand
