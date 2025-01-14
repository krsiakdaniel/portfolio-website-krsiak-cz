import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const HeroParagraph: FC = (): JSX.Element => {
  return (
    <Paragraph dataTestId={DATA_TEST_IDS.hero.paragraph} customCss="text-center font-semibold">
      {TEXT.heroText}
    </Paragraph>
  )
}

export default HeroParagraph
