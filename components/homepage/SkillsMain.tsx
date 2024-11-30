import DividerWithText from '@/components/shared/DividerWithText'
import SkillsCard from '@/components/shared/SkillsCard'
import { skills } from '@/data/skills/skills-main'

const SkillsMain = () => {
  return (
    <div className="mt-20">
      <DividerWithText text="My Main Skills" />
      <div className="mb-20 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
