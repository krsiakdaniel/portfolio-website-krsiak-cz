import Image from 'next/image'
import { FC } from 'react'

import { Icon } from '@/lib/utils/interfaces/interfaces'

type ProjectSkillsProps = {
  mySkillsIcons: Icon[]
}

const ProjectSkills: FC<ProjectSkillsProps> = ({ mySkillsIcons }): JSX.Element => (
  <div className="mt-2 flex flex-wrap lg:mt-4">
    {mySkillsIcons.map((item) => (
      <Image key={item.name} src={item.path} alt={item.name} className="mr-2 mt-2 lg:mt-0" width={32} height={32} />
    ))}
  </div>
)

export default ProjectSkills
