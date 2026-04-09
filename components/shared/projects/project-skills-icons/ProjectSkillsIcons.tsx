import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { ImageLoadingEnum } from '@/lib/types/enums'

import { PROJECT_SKILLS_ICON } from './ProjectSkillsIcons.constants'
import { ProjectSkillsIconsProps } from './ProjectSkillsIcons.types'

const ProjectSkillsIcons = ({ skillsIcons = [] }: ProjectSkillsIconsProps) => {
  return (
    <div className="mt-2 flex flex-wrap lg:mt-4">
      {skillsIcons.map((item) => (
        <div
          key={item.name}
          className={`mr-2 mt-2 rounded-md bg-gray-100 lg:mt-0 w-[${PROJECT_SKILLS_ICON.WIDTH}px] h-[${PROJECT_SKILLS_ICON.HEIGHT}px]`}
        >
          <ImageComponent
            src={item.path}
            width={PROJECT_SKILLS_ICON.WIDTH}
            height={PROJECT_SKILLS_ICON.HEIGHT}
            alt={item.name}
            loading={ImageLoadingEnum.LAZY}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectSkillsIcons
