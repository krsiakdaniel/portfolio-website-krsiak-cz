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

// contact
export interface Contact {
  image: string
  heading: string
  description: string
  href: string
  linkText: string
}

// utils
export type GoBackLinkType = 'work' | 'personal'
