import { FC } from 'react'

import ExpertiseSection from '@/components/pages/home/expertise/ExpertiseSection'
import DividerWithText from '@/components/shared/DividerWithText'

import { committedMindsetItems } from '@/lib/data/pages/home/expertise/committedMindset'
import { problemSolvingItems } from '@/lib/data/pages/home/expertise/problemSolving'
import { skillsForCompanyItems } from '@/lib/data/pages/home/expertise/skillsForCompany'
import { DIVIDER_WITH_TEXT, TEXT } from '@/localization/english'

const MyExpertise: FC = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text={DIVIDER_WITH_TEXT.myExpertise} />

      <div className="mt-5 flex flex-wrap gap-20">
        <div className="min-w-[300px] flex-1">
          <ExpertiseSection heading={TEXT.skillsForCompany} listItems={skillsForCompanyItems} />
        </div>
        <div className="min-w-[300px] flex-1">
          <ExpertiseSection heading={TEXT.committedMindset} listItems={committedMindsetItems} />
        </div>
        <div className="min-w-[300px] flex-1">
          <ExpertiseSection heading={TEXT.problemSolving} listItems={problemSolvingItems} />
        </div>
      </div>
    </div>
  )
}

export default MyExpertise
