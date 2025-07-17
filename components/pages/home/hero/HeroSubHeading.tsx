import { FC } from 'react'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EM_DASH } from '@/lib/utils/constants/specialCharacters'

// Import typography design tokens
import { RESPONSIVE_TYPOGRAPHY } from '@/lib/design-tokens/typography'

const HeroSubHeading: FC = (): JSX.Element => {
  const textTypeScriptAndNext = `${TEXT.typeScript} &\u00A0${TEXT.next}`

  return (
    <span
      className={`mt-2 text-violet-600 ${RESPONSIVE_TYPOGRAPHY.h2.base} ${RESPONSIVE_TYPOGRAPHY.h2.sm} ${RESPONSIVE_TYPOGRAPHY.h2.md}`}
      data-testid={DATA_TEST_IDS.hero.headingSmall}
    >
      {TEXT.reactDeveloper}
      <span className="mx-4 hidden md:inline-block">{EM_DASH}</span>
      <span className="block md:inline">{textTypeScriptAndNext}</span>
    </span>
  )
}

export default HeroSubHeading
