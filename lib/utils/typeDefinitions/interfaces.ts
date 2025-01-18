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

// Link
export interface Link {
  urlText: string
  url: string
  dataTestId: string
}

// Meta Data
export interface MetaDataKeywords {
  [key: string]: string
}

// Other Experience Data
export interface OtherExperienceData {
  id: number
  company: string
  role: string
  description: string
}

// Page Link Item
export interface PageLinkItem {
  href: string
  text: string
  dataTestId: string
  id: string
}

// Project Base
export interface ProjectBase {
  isFeatured?: boolean
  image: string
  title: string
  company: string
  role: string
  description: string
  mySkillsIcons: Icon[]
  customers?: string
  personalProjectNote?: string
  linkText: string
  linkProjectPage: string
}

// Project
export interface Project extends ProjectBase {
  id: string
  imageShowcase: ImageShowcaseItem[]
  years?: string
  skillsOverview: Skill[]
  projectLinks: Link[]
  linkGitHub?: string
}

// Section
export interface Section {
  id?: number
  title: string
  titleHighlight?: string
  items: SectionItem[]
}

// Section Item
export interface SectionItem {
  id: string
  text: string
}

// Skill
export interface Skill {
  id: number
  description: SkillCategoryType
  skillsList: string[]
}

// Skill Card Item
export interface SkillCardItem {
  id: string
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  years: number
}

// Skills Info
export interface SkillsInfo {
  id: number
  text: string
}

// Status Badge
export interface StatusBadge {
  id: number
  name: string
  src: string
  alt: string
  width: number
  height: number
}

// Testimonial Item
export interface TestimonialItem {
  id: string
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

// Image Showcase Item
export interface ImageShowcaseItem {
  id: number
  src: string
}
