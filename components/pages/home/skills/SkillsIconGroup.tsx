import ImageComponent from '@/components/shared/ImageComponent'

import { capitalizeFirstLetter } from '@/lib/utils/helpers/text/capitalizeFirstLetter'
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
          loading={ImageLoading.LAZY}
          sizes={`${SKILLS_ICON.WIDTH}px`}
          alt={capitalizeFirstLetter(item.name)}
          dataTooltipContent={capitalizeFirstLetter(item.name)}
          customCss="transition-transform duration-250 ease-in-out hover:scale-110"
        />
      ))}
    </div>
  )
}

export default SkillsIconGroup
