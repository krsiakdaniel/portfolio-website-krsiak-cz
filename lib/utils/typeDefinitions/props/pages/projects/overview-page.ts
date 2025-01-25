import { Icon, Project, ProjectBase } from '@/lib/utils/typeDefinitions/interfaces'

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

// Project Section Props
export type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

// Project Skills Props
export type ProjectSkillsIconsProps = {
  skillsIcons: Icon[]
}

// Project Summary Card Props
export type ProjectSummaryCardProps = ProjectBase & {
  className: string
  dataTestId: string
}
