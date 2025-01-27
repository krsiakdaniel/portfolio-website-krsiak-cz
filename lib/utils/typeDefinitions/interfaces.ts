import { StaticImageData } from 'next/image'

import { DurationUnitEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { SkillCategoryType } from '@/lib/utils/typeDefinitions/types'

// Error Pages
export interface Errors {
  error: Error
}

// Job
export interface Job {
  id: number
  path: string
  title: string
  duration: number
  unit: DurationUnitEnum
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
  id: string
  href: string
  icon: string
  text: string
  dataTestId: string
}

// Project Base
export interface ProjectBase {
  isFeatured?: boolean
  image: string
  icon: string
  title: string
  company: string
  role: string
  description: string
  skillsIcons: Icon[]
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
  skillsList: SkillsEnum[]
}

// Skill Card Item
export interface SkillCardItem {
  id: string
  imgSrc: StaticImageData
  imgAlt: string
  technology: string
  years: number
}

// Skills Info
export interface SkillsInfo {
  id: number
  text: string
  years?: string
}

// Status Badge
export interface StatusBadge {
  id: number
  name: string
  src: string // not 'StaticImageData' but 'string' because it's a URL
  alt: string
  width: number
  height: number
}

// Testimonial Item
export interface TestimonialItem {
  id: string
  personPhoto: StaticImageData
  personIcon: string
  personName: string
  personJob: string
  testimonialText: string
}

// Image Showcase Item
export interface ImageShowcaseItem {
  id: number
  src: string
}

// External URL
export interface ExternalURL {
  gitHub: string
  linkedIn: string
  resumeViewPDF: string
}

// Page URLs
export interface PageUrls {
  websiteProduction: string
  localhost: string
  home: string
  resume: string
  work: {
    mainUrl: string
    kooperativa: string
    smartsupp: {
      dashboard: string
      web: string
      help: string
    }
    komercniBanka: string
    groupon: string
    moravia: string
  }
  personal: {
    mainUrl: string
    krsiak: string
    cryptoMania: string
  }
  testimonials: string
  statusPage: string
}

// Status Badge URLs
export interface StatusBadgeUrls {
  JEST: string
  PLAYWRIGHT: string
  CODEQL: string
  CODE_QUALITY: string
  DEPENDABOT: string
  NETLIFY: string
}

// ARIA Labels
export interface AriaLabels {
  toggleMenu: string
  menu: string
  breadcrumbs: string
  sun: string
  moon: string
  manWalking: string
  forest: string
  forestWithMountain: string
}

// Years of Experience
export interface YearsExperience {
  javaScript: number
  typeScript: number
  react: number
  redux: number
  tailwind: number
  next: number
  webDeveloper: number
  qaAutomation: number
  localizationManager: number
  localizationTester: number
  webCoder: number
  consultantWebsites: number
  consultantWordPress: number
  operatorIBM: number
  ticketAgent: number
  highSchoolAccountant: number
}

// Months of Experience
export interface MonthsExperience {
  qaTeamLeaderAtSmartsupp: number
  airportFlightsInfo: number
  crewMemberKFC: number
}

// Project IDs
export interface ProjectIds {
  work: {
    kooperativa: string
    smartsupp: {
      dashboard: string
      web: string
      help: string
    }
    komercniBanka: string
    groupon: string
    moravia: string
  }
  personal: {
    krsiak: string
    cryptoMania: string
  }
}

// Element IDs
export interface ElementIds {
  home: string
  hero: string
  skills: string
  skillsMain: string
  resume: string
  projects: {
    work: string
    personal: string
  }
  footer: string
  section: {
    react: string
    frontEnd: string
    wordpress: string
    qa: string
    localization: string
    next: string
  }
  error: {
    err404: string
    errGeneral: string
    errGlobal: string
  }
  menu: {
    mobile: string
    desktop: string
    toggle: string
  }
  statusPage: string
  testimonials: string
  websiteLink: {
    resume: string
    testimonials: string
    workExperience: string
    personalProjects: string
  }
}

// Skill Icon
export interface Icon {
  name: string
  path: string
}

// Skill Icon Data - Map skill keys to their respective icons.
export interface SkillToIconMap {
  [key: string]: string
}

// Journey Step
export interface CareerPathStep {
  id: number
  emoji: string
  text: string
}
