import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { ProjectSkillsIconsProps } from '@/lib/utils/typeDefinitions/props/pages/projects/overview-page'

const IMAGE_WIDTH = 28
const IMAGE_HEIGHT = 28

const ProjectSkillsIcons = ({ skillsIcons = [] }: ProjectSkillsIconsProps) => {
  return (
    <div className="mt-2 flex flex-wrap lg:mt-4">
      {skillsIcons.map((item) => (
        <ImageComponent
          key={item.name}
          src={item.path}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={item.name}
          loading={ImageLoading.LAZY}
          customCss="mr-2 mt-2 lg:mt-0"
          dataTooltipContent={item.name}
        />
      ))}
    </div>
  )
}

export default ProjectSkillsIcons
