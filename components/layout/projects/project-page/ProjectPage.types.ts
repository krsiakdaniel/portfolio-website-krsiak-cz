import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'
import { GalleryImage, Link, Project, Section, Skill } from '@/lib/utils/typeDefinitions/interfaces'

export type CustomersCountProps = {
  count: string
}

export type GalleryProps = {
  images: GalleryImage[]
}

export type GalleryImageProps = GalleryProps['images'][0]

export type GalleryPreviewProps = {
  activeImage: GalleryImageProps
}

export type GalleryThumbnailsProps = {
  images: GalleryImageProps[]
  activeImage: GalleryImageProps
  setActiveImage: (image: GalleryImageProps) => void
}

export type GitHubRepositoryLinkProps = {
  href: string
  text: string
}

export type HeaderSectionProps = {
  icon?: string
  ariaLabel: string
  company?: string
  goBackLink: GoBackLinkEnum
  role?: string
  sectionID: string
  title?: string
  years?: string | undefined
}

export type GoBackLinkProps = Pick<HeaderSectionProps, 'goBackLink' | 'sectionID'>

export type ProjectResponsibilitySectionProps = Section

export type ProjectInformationProps = Pick<
  Project,
  'customers' | 'description' | 'linkGitHub' | 'projectLinks' | 'skillsOverview'
>

export type ProjectLinksListProps = {
  linkGitHub?: string
  projectLinks: Link[]
}

export type ProjectResponsibilityProps = {
  sections: Section[]
}

export type SkillsListProps = Pick<Project, 'skillsOverview'>

export type SkillBadgeProps = { skillObject: Skill }
