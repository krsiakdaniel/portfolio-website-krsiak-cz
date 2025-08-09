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
  title: string
  icon: string
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
  ariaLabel: string
  text: string
  dataTestId: string
  isActive?: boolean
}

// Project Base
export interface ProjectBase {
  isFeatured?: boolean
  image: string
  icon: string
  ariaLabel: string
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
  galleryImages: GalleryImage[]
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
  tooltip: string
}

// Skills Info
export interface SkillsInfo {
  id: number
  icon?: string
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
  personCompany: string
  testimonialText: string
  link?: string
  linkText?: string
}

// Testimonial Data
export interface TestimonialData {
  name: string
  job: string
  company: string
  text: string
  linkText?: string
}

// Testimonials Groups
export interface TestimonialsGroups {
  work: {
    [key: string]: TestimonialData
  }
  personal: {
    [key: string]: TestimonialData
  }
  fitness: {
    [key: string]: TestimonialData
  }
}

// Gallery Image
export interface GalleryImage {
  id: number
  src: string
}

// External URL
export interface ExternalURL {
  gitHub: string
  linkedIn: string
  resumeViewPDF: string
  uptimeMonitorStatus: string
  uptimeMonitorStatusExternal: string
  graceChurch: string
  bonyToBeastly: string
}

// Environment URLs
export interface EnvUrls {
  production: string
  localhost: string
}

// Page Top Level URLs
export interface PageTopLevelUrls {
  home: string
  whoIAm: string
  workExperience: string
  resume: string
  personalProjects: string
  testimonials: string
  status: string
}

// Projects Personal Top Level URLs
export interface ProjectsPersonalTopLevelUrls {
  krsiak: string
  cryptoMania: string
}

// Projects Work Top Level URLs
export interface ProjectsWorkTopLevelUrls {
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

// Page URLs
export interface PageUrls {
  home: string
  whoIAm: string
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
  status: string
}

// Projects URLs
export interface ProjectsUrls {
  personal: {
    krsiak: string
    cryptoMania: string
  }
  work: {
    kooperativa: string
    smartsupp: {
      dashboard: string
      web: string
      help: string
    }
    komercniBanka: {
      branchesAndAtms: string
      branchesAndAtmsDetails: string
      exchangeRates: string
      exchangeRatesDetails: string
    }
    groupon: string
    moravia: string
  }
}

// GitHub URLs
export interface GitHubUrls {
  personal: {
    krsiak: string
    cryptoMania: string
  }
}

// Sitemap URLs
export interface SitemapUrls {
  home: string
  whoIAm: string
  resume: string
  workExperience: string
  workKooperativa: string
  workSmartsuppDashboard: string
  workSmartsuppWeb: string
  workSmartsuppHelp: string
  workKomercniBanka: string
  workGroupon: string
  workMoravia: string
  personalProjects: string
  personalKrsiak: string
  personalCryptoMania: string
  testimonials: string
  status: string
}

// Sitemap Item
export interface SitemapItem {
  url: string
  priority: number
}

// Status Badge URLs
export interface StatusBadgeUrls {
  JEST_TEST: string
  PLAYWRIGHT_TEST: string
  PRETTIER_CHECK_FORMATTING: string
  PULL_REQUEST_LABELER: string
  AUTO_AUTHOR_ASSIGN: string
  CODEQL: string
  CODE_QUALITY: string
  DEPENDABOT: string
  NETLIFY: string
  UPTIME: string
}

// Years of Experience
export interface YearsExperience {
  javaScript: number
  typeScript: number
  react: number
  redux: number
  tailwind: number
  playwright: number
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
  reactTooltip: string
  home: string
  whoIAm: string
  hero: string
  header: string
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
    qualityAssurance: string
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
  status: string
  testimonials: string
  websiteLink: {
    whoIAm: string
    workExperience: string
    resume: string
    personalProjects: string
    testimonials: string
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

// Travel Item
export interface TravelItem {
  id: string
  flag: string
  text: string
}
