import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { GoBackLinkEnum, LinkColors, NavigationDirectionEnum } from '@/lib/utils/typeDefinitions/enums'
import {
  Icon,
  ImageShowcaseItem,
  Link,
  OtherExperienceData,
  Project,
  Section,
  SkillCardItem,
  SkillsInfo,
  TestimonialItem,
} from '@/lib/utils/typeDefinitions/interfaces'
import { BreadCrumbsType, HandleMenuToggleType } from '@/lib/utils/typeDefinitions/types'

// TODO: split these into files inside a folder /utils/props/...

// ### /app
export type RootLayoutProps = {
  children: ReactNode
}

// ### /components/icons
export type IconArrowProps = {
  direction: NavigationDirectionEnum
}

export type IconCheckProps = {
  iconColor?: string
}

// ### /components/layout/errors
export type ErrorPageContentProps = {
  imgSrc: StaticImageData
  imgAlt: string
  heading: string
  description: string
  note: string
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
}

export type ErrorPageLayoutProps = {
  error: Error
  pageContainerId?: string
  imgAlt: string
  description: string
  note: string
}

// ### /components/layout/header/menu
export type MenuProps = {
  isMobile: boolean
}

export type MenuDesktopProps = {
  isOpen: boolean
  handleMenuToggle: HandleMenuToggleType
}

export type MenuToggleProps = {
  isOpen: boolean
  handleMenuToggle: HandleMenuToggleType
}

// ### /components/layout/header
export type ScrollProgressBarProps = {
  scroll: number
}

// ### /components/layout/page-navigation
export type DefaultNoLinkNavigationProps = {
  arrowDirection: NavigationDirectionEnum
}

export type PageNavigationProps = {
  linkPrevious?: string
  namePrevious?: string
  linkNext?: string
  nameNext?: string
  dataTestIdPrevious?: string
  dataTestIdNext?: string
}

export type PageNavigationLinkProps = {
  href: string
  text: string
  direction?: NavigationDirectionEnum
  dataTestId: string | undefined
}

// ### /components/layout/projects/project-page
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

// ### /components/layout/projects
export type ProjectPageLayoutWrapperProps = {
  breadCrumbs: BreadCrumbsType
  pageID: string
  projectData: Project
  sections: Section[]
  showAlert?: ReactNode
  PageNavigation: ReactNode
} & HeaderSectionProps

export type ProjectsOverviewLayoutProps = {
  heading: string
  description: ReactNode
  children: ReactNode
}

// ### /components/layout
export type PageContainerProps = {
  id?: string
  marginTop?: 'mt-0' | 'mt-20'
  children: ReactNode
}

// ### /components/pages/home/expertise
export type ExpertiseSectionProps = {
  heading: string
  listItems: SkillsInfo[]
}

// ### /components/pages/home/skills
export type SkillsIconGroupProps = {
  icons: Icon[]
  className?: string
}

// ### /components/pages/projects/other-experience
export type ExperienceCardProps = {
  company: string
  role: string
  description: string
}

export type ExperienceSectionProps = {
  id: string
  text: string
}

export type OtherExperienceContentProps = {
  experience: OtherExperienceData[]
}

// ### /components/pages/projects/overview-page
export type ProjectDetailsProps = {
  title: string
  company: string
  role: string
  description: string
  customers?: string
  personalProjectNote?: string
}

export type ProjectImageProps = {
  isFeatured?: boolean
  image: string
  title: string
}

export type ProjectLinkProps = {
  linkText: string
  linkProjectPage: string
  dataTestId: string
}

export type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

export type ProjectSkillsProps = {
  mySkillsIcons: Icon[]
}

export type ProjectSummaryCardProps = {
  isFeatured?: boolean | undefined
  image: string
  title: string
  company: string
  role: string
  description: string
  mySkillsIcons: Icon[]
  customers: string | undefined
  personalProjectNote: string | undefined
  linkText: string
  linkProjectPage: string
  dataTestId: string
  className: string
}

// ### /components/pages/resume
export type ResumePlainTextPageProps = {
  content: string
}

export type SocialProofCardProps = {
  title: string
  description: string
}

// ### /components/pages/testimonials
export type TestimonialProps = {
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

export type TestimonialDescriptionProps = {
  description: string
}

export type TestimonialHeaderProps = {
  title: string
}

export type TestimonialsSectionProps = {
  title: string
  description: string
  testimonials: TestimonialItem[]
}

// ### /components/shared/call-to-action
export type CallToActionProps = {
  highlight: string
  heading: string
  description: string
  link: string
  isLinkExternal?: boolean
  linkText: string
  dataTestId: string
  icon: string
}

// ### /components/shared/
// alert
export type AlertProps = {
  title: string
  description: string
  linkComponent: ReactNode
}

// breadcrumbs
export type BreadCrumbsProps = BreadCrumbsType

export type BreadcrumbsItemProps = {
  url: string
  text: string
}

// divider
export type DividerWithTextProps = {
  text: string
}

// headings
export type Heading1Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  textSize?: string
  textSizeSM?: string
  textSizeLG?: string
  customCss?: string | null
}

export type Heading2Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading3Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading4Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

export type Heading5Props = {
  children: ReactNode
  dataTestId?: string
  textColor?: string
  customCss?: string
}

// highlight
export type HighlightProps = {
  text: string
}

// list
export type ListProps = {
  children: ReactNode
}

export type ListItemProps = {
  children: ReactNode
}

// paragraph
export type ParagraphProps = {
  marginTop?: 'mt-0' | 'mt-2' | 'mt-4' | 'mt-8' | 'mt-16'
  size?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'
  textColor?: 'text-neutral-500' | 'text-neutral-600' | 'text-neutral-700' | 'text-neutral-900'
  customCss?: string
  dataTestId?: string
  children: ReactNode
}

// scan my contact QR
export type ScanMyContactQRProps = {
  showDivider?: boolean
  showNote?: boolean
  width?: number
  height?: number
}

// skill card
export type SkillCardProps = SkillCardItem

// social link
export type SocialLinkProps = {
  href: string
  text: string
  linkColor: LinkColors
  className?: string
  dataTestId: string
}
