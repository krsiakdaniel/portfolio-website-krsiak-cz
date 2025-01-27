import { CareerPathStep } from '@/lib/utils/typeDefinitions/interfaces'

// Open To Work Props
export type OpenToWorkProps = {
  isOpenToWork: boolean
}

// Resume Contact Props
export type ResumeContactProps = OpenToWorkProps

// Photo Props
export type PhotoProps = OpenToWorkProps

// Career Path Job Step Props
export type CareerPathJobStepProps = {
  step: CareerPathStep
  index: number
}
