import { FC } from 'react'

import { SkillBadgeProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

const SkillBadge: FC<SkillBadgeProps> = ({ skillObject }) => {
  return (
    <>
      {skillObject.skillsList.map((skill) => (
        <span
          key={skill}
          className={`min-w-20 rounded border border-yellow-300 bg-yellow-100 px-2 text-center text-xs font-medium text-yellow-800`}
        >
          {skill}
        </span>
      ))}
    </>
  )
}
export default SkillBadge
