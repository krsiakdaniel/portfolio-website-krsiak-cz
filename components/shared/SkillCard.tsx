import ImageComponent from '@/components/shared/ImageComponent'
import SkillCardTechnologyYears from '@/components/shared/SkillCardTechnologyYears'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'
import { SKILL_CARD_IMAGE } from './constants'

const SkillCard = ({ id, imgSrc, imgAlt, technology, years }: SkillCardProps) => {
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow duration-250 ease-in-out hover:border-gray-300 hover:shadow-md"
      id={getSkillCardID(id)}
    >
      <div className="flex flex-wrap">
        <ImageComponent
          src={imgSrc}
          alt={imgAlt}
          loading={ImageLoading.EAGER}
          customCss="mr-4 h-12 w-12 md:h-16 md:w-16"
          sizes={`(max-width: 768px) ${SKILL_CARD_IMAGE.MOBILE.WIDTH}px, ${SKILL_CARD_IMAGE.DESKTOP.WIDTH}px`}
        />
        <SkillCardTechnologyYears technology={technology} years={years} />
      </div>
    </div>
  )
}

export default SkillCard
