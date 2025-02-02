import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { COMMON_VALUES, WHO_I_AM } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const WhoIAmIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.whoIAm.introduction}>
        <span>{WHO_I_AM.introduction1}</span> <Highlight text={COMMON_VALUES.nameDanielKrsiak} />
        <span>{WHO_I_AM.introduction2}</span>
      </Paragraph>
      <Paragraph marginTop="mt-2">
        {WHO_I_AM.textPerson1} <Highlight text={WHO_I_AM.textPerson2} />
        {'.'}
      </Paragraph>
    </>
  )
}

export default WhoIAmIntroduction
