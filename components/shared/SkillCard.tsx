import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'
import SkillCardTechnologyYears from '@/components/shared/SkillCardTechnologyYears'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'

const SkillCard: FC<SkillCardProps> = ({ id, imgSrc, imgAlt, technology, years }): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4" id={getSkillCardID(id)}>
      <div className="flex flex-wrap break-words">
        <ImageComponent src={imgSrc} alt={imgAlt} loading="eager" customCss="mr-4 h-12 w-12 md:h-16 md:w-16" />
        <SkillCardTechnologyYears technology={technology} years={years} />
      </div>
    </div>
  )
}

export default SkillCard
