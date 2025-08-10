import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import HeadingSection from '@/components/shared/HeadingSection'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { ARIA_LABELS, CAREER_PATH, ICON_EMOJI, TEXT } from '@/localization/english'

import { careerReactDev } from '@/lib/data/pages/resume/career-path/careerReactDev'
import { careerTesting } from '@/lib/data/pages/resume/career-path/careerTesting'
import { careerWebDev } from '@/lib/data/pages/resume/career-path/careerWebDev'

const CareerPath = () => {
  return (
    <>
      <HeadingSection text={CAREER_PATH.heading} />

      <Paragraph>
        {CAREER_PATH.text1} <Highlight text={CAREER_PATH.text2} />.
      </Paragraph>

      <div className="mt-10 w-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
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
