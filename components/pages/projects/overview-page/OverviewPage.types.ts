import { Icon, Project, ProjectBase } from '@/lib/utils/typeDefinitions/interfaces'

export type ProjectDetailsProps = {
  company: string
  customers?: string
  description: string
  personalProjectNote?: string
  role: string
  icon: string
  ariaLabel: string
  title: string
}

export type ProjectImageProps = {
  image: string
  isFeatured?: boolean
  title: string
}

export type ProjectSectionProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
}

export type ProjectSkillsIconsProps = {
  skillsIcons: Icon[]
}

export type ProjectSummaryCardProps = ProjectBase & {
  className: string
  dataTestId: string
}
