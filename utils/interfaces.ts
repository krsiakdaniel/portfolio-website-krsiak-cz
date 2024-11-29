import { SkillCategoryType } from './types'

// icons
export interface Icon {
  name: string
  path: string
}

// sections
export interface Section {
  title: string
  titleHighlight?: string | undefined
  items: string[]
}

// project item
export interface Link {
  urlText: string
  url: string
}

export interface Skill {
  description: SkillCategoryType
  skills: string[]
}

export interface Project {
  id: string
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: string[]
  title: string
  company: string
  role: string
  years?: string
  description: string
  mySkillsIcons: Icon[]
  mySkills: Skill[]
  linkText: string
  projectLinks: Link[]
  linkGitHub?: string
  customers?: string
  linkProjectPage: string
}
