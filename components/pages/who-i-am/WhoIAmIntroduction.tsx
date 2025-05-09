import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { COMMON_VALUES, INTRODUCTION, SHARED } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const WhoIAmIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.whoIAm.introduction}>
        <span>{INTRODUCTION.whoIAm.text.introduction1}</span>
        <Highlight text={COMMON_VALUES.nameDanielKrsiak} />
        {','}
        <span>{INTRODUCTION.whoIAm.text.introduction2}</span>{' '}
        <span className="font-bold">{INTRODUCTION.whoIAm.text.developer}</span> {SHARED.and}
        <span className="ml-1">
          <Highlight text={INTRODUCTION.whoIAm.text.freeTime} />
          {'.'}
        </span>
      </Paragraph>
    </>
  )
}

export default WhoIAmIntroduction
