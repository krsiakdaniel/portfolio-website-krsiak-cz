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
  mySkills: string
  linkText: string
  links: LinkItem[]
  linkGitHub?: string
  customers?: string
  linkProjectPage: string
}
