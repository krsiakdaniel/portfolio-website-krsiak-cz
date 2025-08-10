import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SkillsIconGroupProps } from '@/lib/utils/typeDefinitions/props/pages/home/skills'
import { SKILLS_ICON } from './constants'

const SkillsIconGroup = ({ icons = [], customCss = '' }: SkillsIconGroupProps) => {
  return (
    <div className={`flex justify-center space-x-2 ${customCss}`}>
      {icons.map((item) => (
        <ImageComponent
          key={item.name}
          src={item.path}
          width={SKILLS_ICON.WIDTH}
          height={SKILLS_ICON.HEIGHT}
          alt={item.name}
          loading={ImageLoading.LAZY}
          dataTooltipContent={item.name}
          sizes={`${SKILLS_ICON.WIDTH}px`}
        />
      ))}
    </div>
  )
}

export default SkillsIconGroup
