import { FC } from 'react'

import { getYearsText } from '@/lib/utils/helpers/years/getYearsText'

import { SkillCardTechnologyYearsProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card-technology-years'

const SkillCardTechnologyYears: FC<SkillCardTechnologyYearsProps> = ({ technology, years }): JSX.Element => {
  return (
    <div>
      <div className="text-xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{technology}</div>
      {years && (
        <div className="text-md font-semibold tracking-tight text-neutral-500 md:text-xl">
          {years} {getYearsText(years)}
        </div>
      )}
    </div>
  )
}

export default SkillCardTechnologyYears
