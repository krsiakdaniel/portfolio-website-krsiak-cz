import { OtherExperienceData, Project } from '@/lib/utils/typeDefinitions/interfaces'

export type ProjectSectionGridProps = {
  projectData: Project[]
  sectionId: string
  sectionText: string
  otherExperience?: OtherExperienceData[]
  showPlaceholder?: boolean
}
