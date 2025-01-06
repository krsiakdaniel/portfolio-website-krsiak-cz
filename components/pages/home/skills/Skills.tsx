import { FC } from 'react'

import SkillsIconGroup from '@/components/pages/home/skills/SkillsIconGroup'
import DividerWithText from '@/components/shared/DividerWithText'

import {
  iconsDesignTools,
  iconsWebDesign,
  iconsWebDevelopment,
  iconsWebDevelopmentWithQA,
} from '@/lib/data/pages/home/skills/skillsGrouped'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Skills: FC = (): JSX.Element => {
  return (
    <div id={ID.skills} className="mt-16">
      <DividerWithText text="Skills" />
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
        <p className="text-body-sm w-[300px] text-center italic text-neutral-500 md:w-[600px] lg:w-full">
          {TEXT.skillsIconsNames}
        </p>
      </div>
    </div>
  )
}

export default Skills
