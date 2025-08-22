import { CareerPathStep, ResumePreviewCard } from '@/lib/utils/typeDefinitions/interfaces'

// Photo Props
export type PhotoProps = {
  isPhotoSmall: boolean
  isOpenToWork?: boolean
  showCaption: boolean
}

// Career Path Job Step Props
export type CareerPathJobStepProps = {
  step: CareerPathStep
  index: number
}

// Resume Preview Card
export type ResumePreviewCardProps = ResumePreviewCard
