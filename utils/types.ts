// icons
export interface Icon {
  name: string
  path: string
}

// skills
export type CategoryDescriptionType = 'Frontend' | 'Design' | 'Other'

export type SkillItem = {
  description: CategoryDescriptionType
  skills: string[]
}

// project item
export type LinkItem = {
  urlText: string
  url: string
}

export type Project = {
  id: string
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: string[]
  title: string
  company: string
  role: string
  years?: string
  description: string
  mySkillsIcons: Icon[]
  mySkills: SkillItem[]
  linkText: string
  projectLinks: LinkItem[]
  linkGitHub?: string
  customers?: string
  linkProjectPage: string
}

// project sub page
export type HeaderSectionProps = {
  title: string
  sectionID: string
  role: string
  years?: string | undefined
  goBackLink: GoBackLinkType
}

export type ProjectInformationProps = {
  description: string
  mySkills: SkillItem[]
  customers?: string | undefined
  projectLinks: LinkItem[]
  linkGitHub?: string | undefined
}

export type SectionItem = {
  title: string
  titleHighlight?: string | undefined
  items: string[]
}

// go back link
export type GoBackLinkType = 'work' | 'personal'

// error pages
export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

// breadcrumbs
export type BreadCrumbs = {
  textLevel1: string
  linkLevel1: string
  textLevel2?: string
  linkLevel2?: string
}
