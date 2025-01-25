import Image from 'next/image'
import { FC } from 'react'

import { ProjectSkillsIconsProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const IMAGE_WIDTH = 32
const IMAGE_HEIGHT = 32

const ProjectSkillsIcons: FC<ProjectSkillsIconsProps> = ({ skillsIcons = [] }): JSX.Element => {
  return (
    <div className="mt-2 flex flex-wrap lg:mt-4">
      {skillsIcons.map((item) => (
        <Image
          key={item.name}
          src={item.path}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={item.name}
          className="mr-2 mt-2 lg:mt-0"
        />
      ))}
    </div>
  )
}

export default ProjectSkillsIcons
