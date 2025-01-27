import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'

import { CareerPathJobStepProps } from '@/lib/utils/typeDefinitions/props/pages/resume/resume'

const CareerPathJobStep: FC<CareerPathJobStepProps> = ({ step, index }) => {
  const isHighlighted = index < 3
  const isNotFirstStep = index > 0

  return (
    <span key={step.id}>
      {isNotFirstStep && <span className="ml-2">←</span>}
      <span className="ml-2">{step.emoji}</span>
      <span className="ml-1">{isHighlighted ? <Highlight text={step.text} /> : step.text}</span>
    </span>
  )
}

export default CareerPathJobStep
