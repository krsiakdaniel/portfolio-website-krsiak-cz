import { StaticImageData } from 'next/image'

import { DurationUnit } from '@/lib/utils/typeDefinitions/enums'
import { SkillCategoryType } from '@/lib/utils/typeDefinitions/types'

// Error Pages
export interface Errors {
  error: Error
}

// Icons
export interface Icon {
  name: string
  path: string
}

// Job
export interface Job {
  id: number
  path: string
  title: string
  duration: number
  unit: DurationUnit.Year | DurationUnit.Month
  description: string
}

// Menu
export interface MenuLink {
  href: string
  text: string
  testId: string
  id: string
}

// Meta Data
export interface MetaDataKeywords {
  [key: string]: string
}

// Pages Links
export interface PageLinkItem {
  href: string
  text: string
  testId: string
  id: string
}

// Project
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
  isFeatured?: boolean
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
  personalProjectNote?: string
  linkProjectPage: string
}

// Sections
export interface SectionItem {
  id: string
  text: string
}

export interface Section {
  id?: number
  title: string
  titleHighlight?: string
  items: SectionItem[]
}

// Skills
export interface SkillsInfo {
  id: number
  text: string
}

export interface SkillCardItem {
  id: string
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  years: number
}

// Status Page
export interface StatusBadge {
  id: number
  name: string
  src: string
  alt: string
  width: number
  height: number
}

// Testimonials
export interface TestimonialItem {
  id: string
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

// Work Experience
export interface OtherExperienceData {
  id: number
  company: string
  role: string
  description: string
}
