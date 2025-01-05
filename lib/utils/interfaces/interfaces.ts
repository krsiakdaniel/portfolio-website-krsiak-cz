import { StaticImageData } from 'next/image'

import { DurationUnit } from '@/lib/utils/interfaces/enums'
import { SkillCategoryType } from '@/lib/utils/interfaces/types'

// icons
export interface Icon {
  name: string
  path: string
}

// menu
export interface MenuLink {
  href: string
  text: string
  testId: string
  id: string
}

// sections
export interface SectionItem {
  id: string
  text: string
}
export interface Section {
  id?: number
  title: string
  titleHighlight?: string | undefined
  items: SectionItem[]
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
  personalProjectNote?: string
  linkProjectPage: string
}

export interface SkillInfo {
  id: number
  order: number
  title: string
  description: string
}

export interface Job {
  id: number
  path: string
  title: string
  duration: number
  unit: DurationUnit.Year | DurationUnit.Month
  description: string
}

export interface SkillCardItem {
  id: string
  imgSrc: StaticImageData
  imgAlt: string
  title: string
  years: number
}

// status page
export interface StatusBadge {
  id: number
  name: string
  src: string
  alt: string
  width: number
  height: number
}

// pages links
export interface PageLinkItem {
  href: string
  text: string
  testId: string
  id: string
}

// error pages
export interface Errors {
  error: Error
}

// testimonials
export interface Testimonial {
  id: string
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}
