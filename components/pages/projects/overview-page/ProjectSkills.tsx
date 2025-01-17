import Image from 'next/image'
import { FC } from 'react'

import { ProjectSkillsProps } from '@/lib/utils/typeDefinitions/props/props'

const ProjectSkills: FC<ProjectSkillsProps> = ({ mySkillsIcons }): JSX.Element => {
  return (
    <div className="mt-2 flex flex-wrap lg:mt-4">
      {mySkillsIcons.map((item) => (
        <Image key={item.name} src={item.path} width={32} height={32} alt={item.name} className="mr-2 mt-2 lg:mt-0" />
      ))}
    </div>
  )
}

export default ProjectSkills
