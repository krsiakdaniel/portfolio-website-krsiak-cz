import { CareerPathStep } from '@/lib/utils/typeDefinitions/interfaces'

// Open To Work Props
export type OpenToWorkProps = {
  isOpenToWork: boolean
}

// Photo Props
export type PhotoProps = {
  isPhotoSmall: boolean
} & OpenToWorkProps

// Career Path Job Step Props
export type CareerPathJobStepProps = {
  step: CareerPathStep
  index: number
}
