import { OtherExperienceData } from '@/lib/utils/typeDefinitions/interfaces'

export type ExperienceCardProps = {
  company: string
  role: string
  description: string
}

export type ExperienceSectionProps = {
  id: string
  text: string
}

export type OtherExperienceContentProps = {
  experience: OtherExperienceData[]
}
