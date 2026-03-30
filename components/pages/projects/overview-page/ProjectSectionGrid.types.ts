import { OtherExperienceData, Project } from '@/lib/types/interfaces'

export type ProjectSectionGridProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
  otherExperience?: OtherExperienceData[]
  showPlaceholder?: boolean
}
