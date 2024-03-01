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
  id: number
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: string[]
  title: string
  role: string
  years?: string
  description: string
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
