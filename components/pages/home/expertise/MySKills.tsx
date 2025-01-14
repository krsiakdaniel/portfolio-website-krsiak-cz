import { FC } from 'react'

import MyMindset from '@/components/pages/home/expertise/MyMindset'
import SkillsForCompany from '@/components/pages/home/skills/SkillsForCompany'
import DividerWithText from '@/components/shared/DividerWithText'

import { DIVIDER_WITH_TEXT } from '@/localization/english'

const MySKills: FC = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text={DIVIDER_WITH_TEXT.whatIDo} />
      <div className="mt-5 flex flex-col space-y-20 lg:flex-row lg:space-x-20 lg:space-y-0">
        <SkillsForCompany />
        <MyMindset />
      </div>
    </div>
  )
}

export default MySKills
