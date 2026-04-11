import { type OtherExperienceData, type Project } from '@/lib/types/interfaces'

export type ProjectSectionGridProps = {
  projectData: Project[]
  priorityFirstCard?: boolean
  sectionId: string
  sectionText: string
  otherExperience?: OtherExperienceData[]
  showPlaceholder?: boolean
}
