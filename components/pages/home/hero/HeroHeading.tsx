import { FC } from 'react'

import Heading1 from '@/components/shared/Heading1'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const HeroHeading: FC = (): JSX.Element => {
  return (
    <Heading1
      dataTestId={DATA_TEST_IDS.hero.heading}
      textColor="text-neutral-900"
      customCss="flex flex-col text-center"
    >
      <span>{TEXT.nameDanielKrsiak}</span>
      <small className="mt-2 text-violet-600" data-testid={DATA_TEST_IDS.hero.headingSmall}>
        {TEXT.reactDeveloperTypeScript}
      </small>
    </Heading1>
  )
}

export default HeroHeading
