import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'
import { GalleryImage, Link, Project, Section, Skill } from '@/lib/utils/typeDefinitions/interfaces'

// Customers Count Props
export type CustomersCountProps = {
  count: string
}

// Gallery Props
export type GalleryProps = {
  images: GalleryImage[]
}

// Gallery Image Props
export type GalleryImageProps = GalleryProps['images'][0]

// Gallery Preview Props
export type GalleryPreviewProps = {
  activeImage: GalleryImageProps
}

// Gallery Thumbnails Props
export type GalleryThumbnailsProps = {
  images: GalleryImageProps[]
  activeImage: GalleryImageProps
  setActiveImage: (image: GalleryImageProps) => void
}

// GitHub Repository Link Props
export type GitHubRepositoryLinkProps = {
  href: string
  text: string
}

// Header Section Props
export type HeaderSectionProps = {
  icon?: string
  company?: string
  goBackLink: GoBackLinkEnum
  role?: string
  sectionID: string
  title?: string
  years?: string | undefined
}

// Go Back Link Props
export type GoBackLinkProps = Pick<HeaderSectionProps, 'goBackLink' | 'sectionID'>

// Project Responsibility Section Props
export type ProjectResponsibilitySectionProps = Section

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

// Skills Badge Props
export type SkillBadgeProps = { skillObject: Skill }
