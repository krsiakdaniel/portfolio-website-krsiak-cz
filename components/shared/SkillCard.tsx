import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import SkillCardTechnologyYears from '@/components/shared/SkillCardTechnologyYears'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'

const MOBILE_IMAGE_WIDTH_PX = 48 // 48px = 3 rem = 12 in Tailwind CSS
const DESKTOP_IMAGE_WIDTH_PX = 64 // 48px = 4 rem = 16 in Tailwind CSS

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
          customCss="mr-4 h-12 w-12 md:h-16 md:w-16"
          dataTooltipContent={tooltip}
          sizes={`(max-width: 768px) ${MOBILE_IMAGE_WIDTH_PX}px, ${DESKTOP_IMAGE_WIDTH_PX}px`}
        />
        <SkillCardTechnologyYears technology={technology} years={years} />
      </div>
    </div>
  )
}

export default SkillCard
