import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SkillsIconGroupProps } from '@/lib/utils/typeDefinitions/props/pages/home/skills'

const IMAGE_WIDTH = 44
const IMAGE_HEIGHT = 44

const SkillsIconGroup: FC<SkillsIconGroupProps> = ({ icons = [], customCss = '' }): JSX.Element => {
  return (
    <div className={`flex justify-center space-x-2 ${customCss}`}>
      {icons.map((item) => (
        <ImageComponent
          key={item.name}
          src={item.path}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alt={item.name}
          loading={ImageLoading.EAGER}
          dataTooltipContent={item.name}
          sizes={`${IMAGE_WIDTH}px`}
        />
      ))}
    </div>
  )
}

export default SkillsIconGroup
