// project item
export type LinkItem = { urlText: string; url: string }

export type Project = {
  id: number
  isFeatured?: boolean | undefined
  image: string
  imageShowcase: string[]
  title: string
  role: string
  years?: string
  description: string
  mySkills: string[]
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
  goBackLink: string
}

export type ProjectInformationProps = {
  description: string
  mySkills: string[]
  customers?: string | undefined
  projectLinks: LinkItem[]
  linkGitHub?: string
}

export type SectionItem = {
  title: string
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
