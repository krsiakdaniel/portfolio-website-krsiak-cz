import { StaticImageData } from 'next/image'

import { DurationUnitEnum, SkillsEnum } from '@/lib/utils/typeDefinitions/enums'
import { SkillCategoryType } from '@/lib/utils/typeDefinitions/types'

// Job
export interface Job {
  readonly id: number
  readonly title: string
  readonly icon: string
  readonly duration: number
  readonly unit: DurationUnitEnum
  readonly description: string
}

// Link
export interface Link {
  readonly urlText: string
  readonly url: string
  readonly dataTestId: string
}

// Meta Data
export type MetaDataKeywords = Record<string, string>

// Other Experience Data
export interface OtherExperienceData {
  readonly id: number
  readonly company: string
  readonly role: string
  readonly description: string
}

// Page Link Item
export interface PageLinkItem {
  readonly id: string
  readonly href: string
  readonly icon: string
  readonly ariaLabel: string
  readonly text: string
  readonly dataTestId: string
  readonly isActive?: boolean
}

/**
 * Project Base
 *
 * Base interface for project data used across work and personal projects.
 * Contains common properties shared by all projects.
 */
export interface ProjectBase {
  readonly isFeatured?: boolean
  readonly image: string
  readonly icon: string
  readonly ariaLabel: string
  readonly title: string
  readonly company: string
  readonly role: string
  readonly description: string
  readonly skillsIcons: Icon[]
  readonly customers?: string
  readonly personalProjectNote?: string
  readonly linkText: string
  readonly linkProjectPage: string
}

/**
 * Project
 *
 * Complete project interface extending ProjectBase with additional details.
 * Used for rendering full project pages including galleries, skill breakdowns,
 * external links, and GitHub repositories.
 */
export interface Project extends ProjectBase {
  readonly id: string
  readonly galleryImages: GalleryImage[]
  readonly years?: string
  readonly skillsOverview: Skill[]
  readonly projectLinks: Link[]
  readonly linkGitHub?: string
}

// Section
export interface Section {
  readonly id?: number
  readonly title: string
  readonly titleHighlight?: string
  readonly items: SectionItem[]
}

// Section Item
export interface SectionItem {
  readonly id: string
  readonly text: string
}

// Skill
export interface Skill {
  readonly id: number
  readonly description: SkillCategoryType
  readonly skillsList: SkillsEnum[]
}

// Skill Card Item
export interface SkillCardItem {
  readonly id: string
  readonly imgSrc: StaticImageData
  readonly imgAlt: string
  readonly technology: string
  readonly years: number
  readonly tooltip: string
}

// Skills Info
export interface SkillsInfo {
  readonly id: number
  readonly icon?: string
  readonly text: string
  readonly years?: string
}

// Status Badge
export interface StatusBadge {
  readonly id: number
  readonly name: string
  readonly src: string // not 'StaticImageData' but 'string' because it's a URL
  readonly alt: string
  readonly width: number
  readonly height: number
}

// Testimonial Item
export interface TestimonialItem {
  readonly id: string
  readonly personPhoto: StaticImageData
  readonly personIcon: string
  readonly personName: string
  readonly personJob: string
  readonly personCompany: string
  readonly testimonialText: string
  readonly link?: string
  readonly linkText?: string
}

// Testimonial Data
export interface TestimonialData {
  readonly name: string
  readonly job: string
  readonly company: string
  readonly text: string
  readonly linkText?: string
}

/**
 * Testimonials Groups
 *
 * Organizes testimonials into categorized groups (work, personal, fitness).
 * Each category is a Record mapping to their respective TestimonialData.
 */
export interface TestimonialsGroups {
  readonly work: Record<string, TestimonialData>
  readonly personal: Record<string, TestimonialData>
  readonly fitness: Record<string, TestimonialData>
}

// Gallery Image
export interface GalleryImage {
  readonly id: number
  readonly src: string
}

// External URL
export interface ExternalURL {
  readonly gitHub: string
  readonly linkedIn: string
  readonly resumeViewPDF: string
  readonly resumeViewDOCX: string
  readonly uptimeMonitorStatus: string
  readonly uptimeMonitorStatusExternal: string
  readonly graceChurch: string
  readonly bonyToBeastly: string
}

// Environment URLs
export interface EnvUrls {
  readonly production: string
  readonly localhost: string
}

// Page URLs
export interface PageUrls {
  // Top-level pages
  readonly home: string
  readonly whoIAm: string
  readonly workExperience: string
  readonly resume: string
  readonly personalProjects: string
  readonly testimonials: string
  readonly status: string

  // Work experience pages
  readonly workKooperativa: string
  readonly workSmartsuppDashboard: string
  readonly workSmartsuppWeb: string
  readonly workSmartsuppHelp: string
  readonly workKomercniBanka: string
  readonly workGroupon: string
  readonly workMoravia: string

  // Personal project pages
  readonly personalKrsiak: string
  readonly personalCryptoMania: string
}

// Projects Work URLs
export interface ProjectsWorkUrls {
  readonly workKooperativaExternal: string
  readonly workSmartsuppDashboardExternal: string
  readonly workSmartsuppWebExternal: string
  readonly workSmartsuppHelpExternal: string
  readonly workKomercniBankaBranchesAndAtmsExternal: string
  readonly workKomercniBankaBranchesDetailsExternal: string
  readonly workKomercniBankaExchangeRatesExternal: string
  readonly workKomercniBankaExchangeDetailsExternal: string
  readonly workGrouponExternal: string
  readonly workMoraviaExternal: string
}

// Projects Personal URLs
export interface ProjectsPersonalUrls {
  readonly personalKrsiakExternal: string
  readonly personalCryptoManiaExternal: string
}

// GitHub URLs
export interface GitHubUrls {
  readonly portfolioWebsiteKrsiak: string
  readonly cryptoMania: string
}

// Sitemap Item
export interface SitemapEntry {
  readonly url: string
  readonly priority: number
}

// Status Badge URLs
export interface StatusBadgeUrls {
  readonly jestTest: string
  readonly playwrightTest: string
  readonly codeQl: string
  readonly prettierCheckFormatting: string
  readonly pullRequestLabeler: string
  readonly autoAuthorAssign: string
  readonly codeQuality: string
  readonly netlify: string
  readonly uptime: string
}

// Years of Experience
export interface YearsExperience {
  readonly javaScript: number
  readonly typeScript: number
  readonly react: number
  readonly redux: number
  readonly tailwind: number
  readonly playwright: number
  readonly next: number
  readonly webDeveloper: number
  readonly qaAutomation: number
  readonly localizationManager: number
  readonly localizationTester: number
  readonly webCoder: number
  readonly consultantWebsites: number
  readonly consultantWordPress: number
  readonly operatorIBM: number
  readonly ticketAgent: number
  readonly highSchoolAccountant: number
}

// Months of Experience
export interface MonthsExperience {
  readonly qaTeamLeaderAtSmartsupp: number
  readonly airportFlightsInfo: number
  readonly crewMemberKFC: number
}

// Project IDs
export interface ProjectIds {
  readonly work: {
    readonly kooperativa: string
    readonly smartsupp: {
      readonly dashboard: string
      readonly web: string
      readonly help: string
    }
    readonly komercniBanka: string
    readonly groupon: string
    readonly moravia: string
  }
  readonly personal: {
    readonly krsiak: string
    readonly cryptoMania: string
  }
}

/**
 * Element IDs
 *
 * Comprehensive mapping of HTML element IDs used across the whole application.
 * Organized by feature area with nested structures for related elements.
 */
export interface ElementIds {
  readonly reactTooltip: string
  readonly main: string
  readonly home: string
  readonly whoIAm: string
  readonly hero: string
  readonly skills: string
  readonly skillsMain: string
  readonly resume: string
  readonly projects: {
    readonly work: string
    readonly personal: string
  }
  readonly footer: string
  readonly section: {
    readonly react: string
    readonly frontEnd: string
    readonly wordpress: string
    readonly qualityAssurance: string
    readonly localization: string
    readonly next: string
  }
  readonly error: {
    readonly err404: string
    readonly errGeneral: string
    readonly errGlobal: string
  }
  readonly menu: {
    readonly mobile: string
    readonly desktop: string
    readonly toggle: string
  }
  readonly status: string
  readonly testimonials: string
  readonly websiteLink: {
    readonly whoIAm: string
    readonly workExperience: string
    readonly resume: string
    readonly personalProjects: string
    readonly testimonials: string
  }
}

// Skill Icon
export interface Icon {
  readonly name: string
  readonly path: string
}

// Skill Icon Data - Map skill keys to their respective icons.
export type SkillToIconMap = Record<string, string>

// Journey Step
export interface CareerPathStep {
  readonly id: number
  readonly emoji: string
  readonly text: string
}

// Travel Item
export interface TravelItem {
  readonly id: string
  readonly icon: string
  readonly iconAria: string
  readonly text: string
}

// Resume Preview Card
export interface ResumePreviewCard {
  readonly title: string
  readonly description: string
  readonly highlight: string
  readonly href: string
  readonly imageSrc: string | StaticImageData
  readonly imageAlt: string
  readonly buttonText: string
  readonly dataTestId: {
    readonly image: string
    readonly button: string
  }
}
