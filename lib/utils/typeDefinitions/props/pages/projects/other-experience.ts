import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

// Experience Card Props
export type ExperienceCardProps = {
  company: string
  description: string
  role: string
}

// Experience Section Props
export type ExperienceSectionProps = {
  id: string
  text: string
}

// Other Experience Content Props
export type OtherExperienceContentProps = {
  experience: OtherExperienceData[]
}
