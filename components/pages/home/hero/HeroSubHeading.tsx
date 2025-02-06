import { FC } from 'react'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { EM_DASH } from '@/lib/utils/constants/specialCharacters'

const HeroSubHeading: FC = (): JSX.Element => {
  const textTypeScriptAndNext = `${TEXT.typeScript} &\u00A0${TEXT.next}`

  return (
    <span
      className="mt-2 text-3xl text-violet-600 sm:text-4xl lg:text-5xl"
      data-testid={DATA_TEST_IDS.hero.headingSmall}
    >
      {TEXT.reactDeveloper}
      <span className="mx-4 hidden md:inline-block">{EM_DASH}</span>
      <span className="block md:inline">{textTypeScriptAndNext}</span>
    </span>
  )
}

export default HeroSubHeading
