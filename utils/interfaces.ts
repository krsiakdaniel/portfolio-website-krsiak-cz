import { StaticImageData } from 'next/image'
import { SkillCategoryType } from './types'

// icons
export interface Icon {
  name: string
  path: string
}

// sections
export interface Section {
  id?: number
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
  id: number
  description: SkillCategoryType
  skillsList: string[]
}

export interface ImageShowcaseItem {
  id: number
  src: string
}

export interface Project {
  id: string
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: ImageShowcaseItem[]
  title: string
  company: string
  role: string
  years?: string
  description: string
  mySkillsIcons: Icon[]
  skillsOverview: Skill[]
  linkText: string
  projectLinks: Link[]
  linkGitHub?: string
  customers?: string
  linkProjectPage: string
}

export interface SkillInfo {
  id: number
  title: string
  description: string
}

export interface Job {
  id: number
  path: string
  title: string
  years: number
  description: string
}

export interface SkillCard {
  id: number
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  titleYears: number
  description: string
}
