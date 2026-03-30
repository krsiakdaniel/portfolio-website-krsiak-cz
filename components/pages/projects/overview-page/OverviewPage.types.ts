import {
  Icon,
  OtherExperienceData,
  Project,
  ProjectBase,
} from '@/lib/utils/typeDefinitions/interfaces'

export type LayoutToggleProps = {
  activeView: 'list' | 'grid'
  onListClick: () => void
  onGridClick: () => void
}

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

export type ProjectSectionGridProps = ProjectSectionProps & {
  otherExperience?: OtherExperienceData[]
  showPlaceholder?: boolean
}

export type ProjectCompactCardProps = {
  ariaLabel: string
  company: string
  dataTestId: string
  icon: string
  image: string
  isFeatured?: boolean
  linkProjectPage: string
  linkText: string
  role: string
  skillsIcons: Icon[]
  title: string
  years?: string
}

export type ProjectListRowProps = {
  ariaLabel: string
  company: string
  icon: string
  id: string
  isFeatured?: boolean
  linkProjectPage: string
  role: string
  skillsIcons: Icon[]
  title: string
  years?: string
}

export type ProjectWorkListViewProps = {
  projects: Project[]
}

export type ProjectSummaryCardProps = ProjectBase & {
  className: string
  dataTestId: string
}
