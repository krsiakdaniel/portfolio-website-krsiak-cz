import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import SkillCardTechnologyYears from '@/components/shared/SkillCardTechnologyYears'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'

const MOBILE_IMAGE_WIDTH = 12 // 3rem = 48px
const DESKTOP_IMAGE_WIDTH = 16 // 4rem = 64px
const MOBILE_IMAGE_WIDTH_PX = 48 // px value
const DESKTOP_IMAGE_WIDTH_PX = 64 // px value

const SkillCard: FC<SkillCardProps> = ({
  id,
  imgSrc,
  imgAlt,
  technology,
  years,
  tooltip = '',
}): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4" id={getSkillCardID(id)}>
      <div className="flex flex-wrap">
        <ImageComponent
          src={imgSrc}
          alt={imgAlt}
          loading={ImageLoading.EAGER}
          customCss={`mr-4 h-${MOBILE_IMAGE_WIDTH} w-${MOBILE_IMAGE_WIDTH} md:h-${DESKTOP_IMAGE_WIDTH} md:w-${DESKTOP_IMAGE_WIDTH}`}
          dataTooltipContent={tooltip}
          sizes={`(max-width: 768px) ${MOBILE_IMAGE_WIDTH_PX}px, ${DESKTOP_IMAGE_WIDTH_PX}px`}
        />
        <SkillCardTechnologyYears technology={technology} years={years} />
      </div>
    </div>
  )
}

export default SkillCard
