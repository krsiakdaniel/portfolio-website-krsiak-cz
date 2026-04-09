import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'

import { SkillCardProps } from '@/features/home/components/skill-card/SkillCard.types'
import SkillCardTechnologyYears from '@/features/home/components/skill-card/SkillCardTechnologyYears'
import { ImageLoadingEnum } from '@/lib/types/enums'

import { SKILL_CARD_IMAGE } from './SkillCard.constants'

const SkillCard = ({ id, imgSrc, imgAlt, technology, years }: SkillCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4" id={getSkillCardID(id)}>
      <div className="flex flex-wrap">
        <div className="mr-4 rounded-xl bg-gray-100 h-12 w-12 md:h-16 md:w-16">
          <ImageComponent
            src={imgSrc}
            alt={imgAlt}
            loading={ImageLoadingEnum.EAGER}
            customCss="h-12 w-12 md:h-16 md:w-16"
            sizes={`(max-width: 768px) ${SKILL_CARD_IMAGE.MOBILE.WIDTH}px, ${SKILL_CARD_IMAGE.DESKTOP.WIDTH}px`}
          />
        </div>
        <SkillCardTechnologyYears technology={technology} years={years} />
      </div>
    </div>
  )
}

export default SkillCard
