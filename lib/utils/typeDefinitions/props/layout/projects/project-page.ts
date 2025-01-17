import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'
import { ImageShowcaseItem, Link, Project, Section } from '@/lib/utils/typeDefinitions/interfaces'

export type CustomersCountProps = {
  count: string
}

export type GalleryProps = {
  imageShowcase: ImageShowcaseItem[]
}

export type GitHubRepositoryLinkProps = {
  link: string
}

export type HeaderSectionProps = {
  title?: string
  sectionID: string
  role?: string
  years?: string | undefined
  company?: string
  goBackLink: GoBackLinkEnum
}

export type PageSectionProps = Section

export type ProjectInformationProps = Pick<
  Project,
  'description' | 'skillsOverview' | 'customers' | 'projectLinks' | 'linkGitHub'
>

export type ProjectLinksListProps = {
  projectLinks: Link[]
  linkGitHub?: string
}

export type ProjectResponsibilityProps = {
  sections: Section[]
}

export type SkillsListProps = Pick<Project, 'skillsOverview'>
