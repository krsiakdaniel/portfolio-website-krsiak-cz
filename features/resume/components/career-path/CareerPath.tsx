import HeadingSection from '@/components/shared/heading/HeadingSection'
import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { careerReactDev } from '@/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/data/pages/resume/career-path/careerWebDev'
import ExpertiseSection from '@/features/home/components/expertise/ExpertiseSection'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

import { CAREER_PATH } from '../../localization'

const CareerPath = () => {
  return (
    <>
      <HeadingSection text={CAREER_PATH.heading} />

      <Paragraph>
        {CAREER_PATH.text1} <Highlight text={CAREER_PATH.text2} />.
      </Paragraph>

      <div className="mt-10 w-full">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <ExpertiseSection
              icon={ICON_EMOJI.atomSymbol}
              ariaLabel={ARIA_LABELS.emoji.atomSymbol}
              heading={TEXT.reactDev}
              listItems={careerReactDev}
            />
            <ExpertiseSection
              icon={ICON_EMOJI.laptop}
              ariaLabel={ARIA_LABELS.emoji.laptop}
              heading={TEXT.webDev}
              listItems={careerWebDev}
            />
          </div>
          <ExpertiseSection
            icon={ICON_EMOJI.cog}
            ariaLabel={ARIA_LABELS.emoji.cog}
            heading={TEXT.testing}
            listItems={careerTesting}
          />
        </div>
      </div>
    </>
  )
}

export default CareerPath
