import { FC } from 'react'

import ImageComponent from '@/components/shared/ImageComponent'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { getYearsText } from '@/lib/utils/helpers/years/getYearsText'

import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'

const SkillCard: FC<SkillCardProps> = ({ id, imgSrc, imgAlt, title, years }): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4" id={getSkillCardID(id)}>
      <div className="flex flex-wrap break-words">
        <ImageComponent src={imgSrc} alt={imgAlt} loading="eager" customCss="mr-4 h-12 w-12 md:h-16 md:w-16" />

        <div>
          <div className="text-xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{title}</div>
          {years && (
            <div className="text-md font-semibold tracking-tight text-neutral-500 md:text-xl">
              {years} {getYearsText(years)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
