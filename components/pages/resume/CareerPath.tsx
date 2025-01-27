import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import CareerPathJobStep from '@/components/pages/resume/CareerPathJobStep'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { careerPathSteps } from '@/lib/data/pages/resume/career-path/careerPathSteps'
import { careerReactDev } from '@/lib/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/lib/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/lib/data/pages/resume/career-path/careerWebDev'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <HeadingSection text="My Career Path" />

      <Paragraph size="text-sm" customCss="hidden lg:block">
        <span className="font-bold">{TEXT.myJourney}</span>{' '}
        {(careerPathSteps ?? []).map((step, index) => (
          <CareerPathJobStep key={step.id} step={step} index={index} />
        ))}
      </Paragraph>

      {/* TODO: refactor this GRID into shared component for Expertise */}
      <div className="mt-10 w-full">
        <div className="grid w-full gap-6 lg:grid-cols-3">
          <div className="grid w-full gap-6 md:grid-cols-2 lg:col-span-2">
            <ExpertiseSection icon={ICON_EMOJI.atomSymbol} heading={TEXT.reactDev} listItems={careerReactDev} />
            <ExpertiseSection icon={ICON_EMOJI.laptop} heading={TEXT.webDev} listItems={careerWebDev} />
          </div>
          <div className="w-full">
            <ExpertiseSection icon={ICON_EMOJI.cog} heading={TEXT.testing} listItems={careerTesting} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerPath
