import { FC } from 'react'

import { SkillBadgeProps } from '@/lib/utils/typeDefinitions/props/layout/projects/project-page'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const SkillBadge: FC<SkillBadgeProps> = ({ skillObject }): JSX.Element => {
  return (
    <>
      {skillObject.skillsList.map((skill) => (
        <span
          key={skill}
          className={`min-w-20 rounded border border-violet-400 bg-violet-100 px-2 text-center ${TYPOGRAPHY_CLASSES.small} font-medium text-violet-800`}
        >
          {skill}
        </span>
      ))}
    </>
  )
}
export default SkillBadge
