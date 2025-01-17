import { Icon, Project } from '@/lib/utils/typeDefinitions/interfaces'

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
