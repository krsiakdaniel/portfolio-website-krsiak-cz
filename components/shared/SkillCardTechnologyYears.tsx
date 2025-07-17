import { FC } from 'react'

import { getYearsText } from '@/lib/utils/helpers/years/getYearsText'

import { SkillCardTechnologyYearsProps } from '@/lib/utils/typeDefinitions/props/shared/skill-card-technology-years'

// Import typography design tokens
import { TYPOGRAPHY_CLASSES } from '@/lib/design-tokens/typography'

const SkillCardTechnologyYears: FC<SkillCardTechnologyYearsProps> = ({
  technology,
  years,
}): JSX.Element => {
  return (
    <div className="break-words">
      <div className={`${TYPOGRAPHY_CLASSES.large} font-bold tracking-tight text-neutral-900 md:text-3xl`}>
        {technology}
      </div>
      {years && (
        <div className={`${TYPOGRAPHY_CLASSES.paragraph} tracking-tight text-neutral-600 md:text-xl`}>
          {years} {getYearsText(years)}
        </div>
      )}
    </div>
  )
}

export default SkillCardTechnologyYears
