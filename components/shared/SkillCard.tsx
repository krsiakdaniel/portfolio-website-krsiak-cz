import Image from 'next/image'
import { FC } from 'react'

import { getSkillCardID } from '@/lib/utils/helpers/skills/getSkillCardID'
import { getYearsText } from '@/lib/utils/helpers/years/getYearsText'

import { SkillCardProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card'

const SkillCard: FC<SkillCardProps> = ({ id, imgSrc, imgAlt, title, years }): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4" id={getSkillCardID(id)}>
      <div className="flex flex-wrap break-words">
        <Image src={imgSrc} alt={imgAlt} className="h-13 w-13 mr-4 lg:h-16 lg:w-16" />

        <div>
          <div className="text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl lg:text-3xl">{title}</div>
          {years && (
            <div className="text-lg font-semibold tracking-tight text-neutral-500 md:text-xl">
              {years} {getYearsText(years)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
