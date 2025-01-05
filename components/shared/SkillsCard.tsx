import Image from 'next/image'
import { FC } from 'react'

import { SkillCard } from '@/lib/utils/interfaces/interfaces'

type SkillsCardProps = SkillCard

const SkillsCard: FC<SkillsCardProps> = ({ imgSrc, imgAlt, title, years }): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="flex flex-wrap break-words">
        <Image src={imgSrc} alt={imgAlt} className="mr-4 h-16 w-16" />

        <div className="">
          <div className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{title}</div>
          {years && (
            <div className="text-xl font-semibold tracking-tight text-neutral-500">
              {years} {`${years === 1 ? 'year' : 'years'}`}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
