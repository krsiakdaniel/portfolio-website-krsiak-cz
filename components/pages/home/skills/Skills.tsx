import { FC } from 'react'

import SkillsIconGroup from '@/components/pages/home/skills/SkillsIconGroup'
import DividerWithText from '@/components/shared/DividerWithText'
import Paragraph from '@/components/shared/Paragraph'

import {
  iconsDesignTools,
  iconsWebDesign,
  iconsWebDevelopment,
  iconsWebDevelopmentWithQA,
} from '@/lib/data/pages/home/skills/skillsGrouped'

import { DIVIDER_WITH_TEXT, TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Skills: FC = (): JSX.Element => {
  return (
    <div id={ID.skills} className="mt-20">
      <DividerWithText text={DIVIDER_WITH_TEXT.skills} />
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0 lg:justify-end">
          <SkillsIconGroup icons={iconsWebDevelopment} />
          <SkillsIconGroup icons={iconsWebDevelopmentWithQA} />
        </div>
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0 lg:justify-start">
          <SkillsIconGroup icons={iconsWebDesign} />
          <SkillsIconGroup icons={iconsDesignTools} />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <Paragraph
          textColor="text-neutral-600"
          size="text-md"
          customCss="w-[270px] text-center italic md:w-[520px]"
        >
          {TEXT.skillsIconsNames}
        </Paragraph>
      </div>
    </div>
  )
}

export default Skills
