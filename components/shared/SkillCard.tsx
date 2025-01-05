import Image from 'next/image'
import { FC } from 'react'

import { getYearsText } from '@/lib/utils/helpers/getYearsText'
import { SkillCardItem } from '@/lib/utils/interfaces/interfaces'

type SkillCardProps = SkillCardItem

const SkillCard: FC<SkillCardProps> = ({ imgSrc, imgAlt, title, years }): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md lg:p-6" id="skill-card">
      <div className="flex flex-wrap break-words">
        <Image src={imgSrc} alt={imgAlt} className="h-13 w-13 mr-4 lg:h-16 lg:w-16" />

        <div id="card-content">
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
