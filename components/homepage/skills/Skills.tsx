import SkillsIconGroup from '@/components/homepage/skills/SkillsIconGroup'
import DividerWithText from '@/components/shared/DividerWithText'

import { iconsSkills1, iconsSkills2, iconsSkills3, iconsSkills4 } from '@/lib/data/skills/skillsMain'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { TEXT } from '@/localization/english'

const Skills = () => {
  return (
    <div id={ID.skills} className="mt-10">
      <DividerWithText text="Skills" />
      <div className="mt-5 flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <SkillsIconGroup icons={iconsSkills1} />
        <SkillsIconGroup icons={iconsSkills2} />
        <SkillsIconGroup icons={iconsSkills3} />
        <SkillsIconGroup icons={iconsSkills4} />
      </div>
      <div>
        <p className="text-body-sm mt-4 text-center italic text-neutral-500">{TEXT.skillsIconsNames}</p>
      </div>
    </div>
  )
}

export default Skills
