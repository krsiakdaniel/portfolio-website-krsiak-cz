import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import CareerPathJobStep from '@/components/pages/resume/CareerPathJobStep'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'

import { ICON_EMOJI } from '@/localization/english'

import { careerPathSteps } from '@/lib/data/pages/resume/career-path/careerPathSteps'
import { careerReactDev } from '@/lib/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/lib/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/lib/data/pages/resume/career-path/careerWebDev'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <HeadingSection text="My Career Path" />

      <Paragraph size="text-sm">
        <span className="font-bold">My journey:</span>{' '}
        {(careerPathSteps ?? []).map((step, index) => (
          <CareerPathJobStep key={step.id} step={step} index={index} />
        ))}
      </Paragraph>

      <div className="mt-10 w-full">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col gap-6 md:flex-row lg:w-2/3">
            <ExpertiseSection icon={ICON_EMOJI.atomSymbol} heading="React Dev" listItems={careerReactDev} />
            <ExpertiseSection icon={ICON_EMOJI.laptop} heading="Web Dev" listItems={careerWebDev} />
          </div>
          <div className="flex w-full lg:w-1/3">
            <ExpertiseSection icon={ICON_EMOJI.cog} heading="Testing" listItems={careerTesting} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPath
