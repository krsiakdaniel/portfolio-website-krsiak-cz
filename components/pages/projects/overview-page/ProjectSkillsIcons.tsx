import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoadingEnum } from '@/lib/types/enums'

import { PROJECT_SKILLS_ICON } from './ProjectSkillsIcons.constants'
import { ProjectSkillsIconsProps } from './ProjectSkillsIcons.types'

const ProjectSkillsIcons = ({ skillsIcons = [] }: ProjectSkillsIconsProps) => {
  return (
    <div className="mt-2 flex flex-wrap lg:mt-4">
      {skillsIcons.map((item) => (
        <ImageComponent
          key={item.name}
          src={item.path}
          width={PROJECT_SKILLS_ICON.WIDTH}
          height={PROJECT_SKILLS_ICON.HEIGHT}
          alt={item.name}
          loading={ImageLoadingEnum.LAZY}
          customCss="mr-2 mt-2 lg:mt-0"
        />
      ))}
    </div>
  )
}

export default ProjectSkillsIcons
