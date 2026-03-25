import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export type ExperienceCardProps = {
  company: string
  description: string
  role: string
}

export type ExperienceSectionProps = {
  id: string
  text: string
}

export type OtherExperienceContentProps = {
  experience: OtherExperienceData[]
}
