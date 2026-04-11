import DividerWithText from '@/components/shared/divider-with-text/DividerWithText'

import { skills } from '@/data/pages/home/skills/skillsMain'

import SkillCard from '@/features/home/components/skill-card/SkillCard'
import { DIVIDER_WITH_TEXT } from '@/localization'

const SkillsMain = () => {
  return (
    <div className="mt-20">
      <DividerWithText text={DIVIDER_WITH_TEXT.myMainSkills} />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {(skills ?? []).map((skill) => (
          <SkillCard
            id={skill.id}
            key={skill.id}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
            technology={skill.technology}
            years={skill.years}
            tooltip={skill.tooltip}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsMain
