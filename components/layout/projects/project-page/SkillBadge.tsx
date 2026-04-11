import { type SkillBadgeProps } from './SkillBadge.types'

const SkillBadge = ({ skillObject }: SkillBadgeProps) => {
  return (
    <>
      {skillObject.skillsList.map((skill) => (
        <span
          key={skill}
          className="min-w-20 rounded-sm border border-violet-400 bg-violet-100 px-2 text-center text-xs font-medium text-violet-800"
        >
          {skill}
        </span>
      ))}
    </>
  )
}
export default SkillBadge
