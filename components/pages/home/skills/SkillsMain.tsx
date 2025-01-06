import { FC } from 'react'

import DividerWithText from '@/components/shared/DividerWithText'
import SkillCard from '@/components/shared/SkillCard'

import { skills } from '@/lib/data/pages/home/skills/skillsMain'

const SkillsMain: FC = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text="My Main Skills" />

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            id={skill.id}
            key={skill.id}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
            title={skill.title}
            years={skill.years}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsMain
