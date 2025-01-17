import { Icon, Project } from '@/lib/utils/typeDefinitions/interfaces'

// Project Details Props
export type ProjectDetailsProps = {
  company: string
  customers?: string
  description: string
  personalProjectNote?: string
  role: string
  title: string
}

// Project Image Props
export type ProjectImageProps = {
  image: string
  isFeatured?: boolean
  title: string
}

// Project Link Props
export type ProjectLinkProps = {
  dataTestId: string
  linkProjectPage: string
  linkText: string
}

// Project Section Props
export type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

// Project Skills Props
export type ProjectSkillsProps = {
  mySkillsIcons: Icon[]
}

// Project Summary Card Props
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
