import { FC } from 'react'

import CommittedMindset from '@/components/pages/home/expertise/CommittedMindset'
import CreativeProblemSolving from '@/components/pages/home/expertise/CreativeProblemSolving'
import SkillsForCompany from '@/components/pages/home/expertise/SkillsForCompany'
import DividerWithText from '@/components/shared/DividerWithText'

import { DIVIDER_WITH_TEXT } from '@/localization/english'

const WhatIDo: FC = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text={DIVIDER_WITH_TEXT.whatIDo} />

      <div className="mt-5 flex flex-wrap gap-20">
        <div className="min-w-[300px] flex-1">
          <SkillsForCompany />
        </div>
        <div className="min-w-[300px] flex-1">
          <CommittedMindset />
        </div>
        <div className="min-w-[300px] flex-1">
          <CreativeProblemSolving />
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
