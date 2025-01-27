import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import DividerWithText from '@/components/shared/DividerWithText'

import { DIVIDER_WITH_TEXT, ICON_EMOJI, TEXT } from '@/localization/english'

import { committedMindsetItems } from '@/lib/data/pages/home/expertise/committedMindset'
import { problemSolvingItems } from '@/lib/data/pages/home/expertise/problemSolving'
import { skillsForCompanyItems } from '@/lib/data/pages/home/expertise/skillsForCompany'

const MyExpertise: FC = (): JSX.Element => {
  return (
    <div className="mt-20">
      <DividerWithText text={DIVIDER_WITH_TEXT.myExpertise} />

      {/* TODO: This is layout needs to be refactored and shared 2x */}
      <div className="mt-4 w-full">
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex w-full flex-col gap-6 md:flex-row lg:w-2/3">
            <ExpertiseSection
              icon={ICON_EMOJI.star}
              heading={TEXT.skillsForCompany}
              listItems={skillsForCompanyItems}
            />
            <ExpertiseSection
              icon={ICON_EMOJI.rocket}
              heading={TEXT.committedMindset}
              listItems={committedMindsetItems}
            />
          </div>
          <div className="flex w-full lg:w-1/3">
            <ExpertiseSection
              icon={ICON_EMOJI.artistPalette}
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
