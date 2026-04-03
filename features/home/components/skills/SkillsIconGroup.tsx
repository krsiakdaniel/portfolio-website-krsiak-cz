import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { capitalizeFirstLetter } from '@/lib/utils/helpers/capitalizeFirstLetter'

import { ImageLoadingEnum } from '@/lib/types/enums'

import { SKILLS_ICON } from './SkillsIconGroup.constants'
import { SkillsIconGroupProps } from './SkillsIconGroup.types'

const SkillsIconGroup = ({ icons = [], customCss = '' }: SkillsIconGroupProps) => {
  return (
    <div className={`flex justify-center space-x-2 ${customCss}`}>
      {icons.map((item) => (
        <ImageComponent
          key={item.name}
          src={item.path}
          width={SKILLS_ICON.WIDTH}
          height={SKILLS_ICON.HEIGHT}
          loading={ImageLoadingEnum.LAZY}
          sizes={`${SKILLS_ICON.WIDTH}px`}
          alt={capitalizeFirstLetter(item.name)}
          dataTooltipContent={capitalizeFirstLetter(item.name)}
          customCss="transition-transform duration-300 ease-in-out hover:scale-110"
        />
      ))}
    </div>
  )
}

export default SkillsIconGroup
