import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { CAREER_PATH, ICON_EMOJI, SHARED, TEXT } from '@/localization/english'

import { careerReactDev } from '@/lib/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/lib/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/lib/data/pages/resume/career-path/careerWebDev'

const CareerPath: FC = (): JSX.Element => {
  return (
    <>
      <HeadingSection text={CAREER_PATH.heading} />

      <Paragraph>
        {CAREER_PATH.text1} <Highlight text={CAREER_PATH.text2} />
        {SHARED.textDot}
      </Paragraph>

      <div className="mt-10 w-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <ExpertiseSection
              icon={ICON_EMOJI.atomSymbol}
              heading={TEXT.reactDev}
              listItems={careerReactDev}
            />
            <ExpertiseSection
              icon={ICON_EMOJI.laptop}
              heading={TEXT.webDev}
              listItems={careerWebDev}
            />
          </div>
          <ExpertiseSection
            icon={ICON_EMOJI.cog}
            heading={TEXT.testing}
            listItems={careerTesting}
          />
        </div>
      </div>
    </>
  )
}

export default CareerPath
