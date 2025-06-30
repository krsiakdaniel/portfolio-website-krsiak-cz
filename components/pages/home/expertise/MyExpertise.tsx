import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import DividerWithText from '@/components/shared/DividerWithText'

import { ARIA_LABELS, DIVIDER_WITH_TEXT, ICON_EMOJI, TEXT } from '@/localization/english'

import { committedMindsetItems } from '@/lib/data/pages/home/expertise/committedMindset'
import { problemSolvingItems } from '@/lib/data/pages/home/expertise/problemSolving'
import { skillsForCompanyItems } from '@/lib/data/pages/home/expertise/skillsForCompany'

const MyExpertise: FC = (): JSX.Element => {
  return (
    <div className="mt-20">
      <DividerWithText text={DIVIDER_WITH_TEXT.myExpertise} />

      <div className="mt-4 w-full">
        <div className="grid w-full gap-6 lg:grid-cols-3">
          <div className="grid w-full gap-6 md:grid-cols-2 lg:col-span-2">
            <ExpertiseSection
              icon={ICON_EMOJI.star}
              ariaLabel={ARIA_LABELS.emoji.star}
              heading={TEXT.skillsForCompany}
              listItems={skillsForCompanyItems}
            />
            <ExpertiseSection
              icon={ICON_EMOJI.rocket}
              ariaLabel={ARIA_LABELS.emoji.rocket}
              heading={TEXT.committedMindset}
              listItems={committedMindsetItems}
            />
          </div>
          <div className="w-full">
            <ExpertiseSection
              icon={ICON_EMOJI.artistPalette}
              ariaLabel={ARIA_LABELS.emoji.artistPalette}
              heading={TEXT.problemSolving}
              listItems={problemSolvingItems}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyExpertise
