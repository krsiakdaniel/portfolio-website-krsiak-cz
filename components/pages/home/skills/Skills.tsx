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
    <div id={ID.skills} className="mt-16">
      <DividerWithText text={DIVIDER_WITH_TEXT.skills} />
      <div className="mt-5 flex flex-col justify-center space-y-2 lg:flex-row lg:space-x-4 lg:space-y-0">
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <SkillsIconGroup icons={iconsWebDevelopment} />
          <SkillsIconGroup icons={iconsWebDevelopmentWithQA} />
        </div>
        <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <SkillsIconGroup icons={iconsWebDesign} />
          <SkillsIconGroup icons={iconsDesignTools} />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <Paragraph
          textColor="text-neutral-500"
          size="text-md"
          customCss="w-[300px] text-center italic md:w-[600px] lg:w-full"
        >
          {TEXT.skillsIconsNames}
        </Paragraph>
      </div>
    </div>
  )
}

export default Skills
