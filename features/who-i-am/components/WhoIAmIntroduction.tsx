import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { COMMON_VALUES } from '@/localization'

import { WHO_I_AM_INTRODUCTION } from '../localization'

const WhoIAmIntroduction = () => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.whoIAm.introduction}>
        <span>{WHO_I_AM_INTRODUCTION.text.introduction1}</span>
        <Highlight text={COMMON_VALUES.nameDanielKrsiak} />
        {'.'} <span>{WHO_I_AM_INTRODUCTION.text.introduction2}</span>{' '}
        <span className="ml-1">{WHO_I_AM_INTRODUCTION.text.freeTime}</span>
        <span className="ml-1">
          <Highlight text={WHO_I_AM_INTRODUCTION.text.loveTravel} />
          {'.'}
        </span>
      </Paragraph>
    </>
  )
}

export default WhoIAmIntroduction
