import { PROJECT_SKILLS_ICON } from '@/components/pages/home/skills/constants'
import { ProjectSkillsIconsProps } from '@/components/pages/projects/overview-page/OverviewPage.types'
import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'

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
          loading={ImageLoading.LAZY}
          customCss="mr-2 mt-2 lg:mt-0"
        />
      ))}
    </div>
  )
}

export default ProjectSkillsIcons
