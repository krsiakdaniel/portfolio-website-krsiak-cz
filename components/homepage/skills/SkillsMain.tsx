import DividerWithText from '@/components/shared/DividerWithText'
import SkillsCard from '@/components/shared/SkillsCard'

import { skills } from '@/lib/data/skills/skillsMain'

const SkillsMain = (): JSX.Element => {
  return (
    <div className="mt-16">
      <DividerWithText text="My Main Skills" />
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillsCard
            id={skill.id}
            key={skill.id}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
            title={skill.title}
            years={skill.years}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsMain
