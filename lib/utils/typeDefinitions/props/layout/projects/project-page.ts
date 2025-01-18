import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'
import { ImageShowcaseItem, Link, Project, Section } from '@/lib/utils/typeDefinitions/interfaces'

// Customers Count Props
export type CustomersCountProps = {
  count: string
}

// Gallery Props
export type GalleryProps = {
  imageShowcase: ImageShowcaseItem[]
}

// GitHub Repository Link Props
export type GitHubRepositoryLinkProps = {
  href: string
  text: string
}

// Header Section Props
export type HeaderSectionProps = {
  company?: string
  goBackLink: GoBackLinkEnum
  role?: string
  sectionID: string
  title?: string
  years?: string | undefined
}

// Page Section Props
export type PageSectionProps = Section

// Project Information Props
export type ProjectInformationProps = Pick<
  Project,
  'customers' | 'description' | 'linkGitHub' | 'projectLinks' | 'skillsOverview'
>

// Project Links List Props
export type ProjectLinksListProps = {
  linkGitHub?: string
  projectLinks: Link[]
}

// Project Responsibility Props
export type ProjectResponsibilityProps = {
  sections: Section[]
}

// Skills List Props
export type SkillsListProps = Pick<Project, 'skillsOverview'>
