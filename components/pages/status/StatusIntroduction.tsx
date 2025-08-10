import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { INTRODUCTION } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const StatusIntroduction = () => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.status.introduction}>
        {INTRODUCTION.status.text.showing}
        {'\u00A0'}
        <Highlight text={INTRODUCTION.status.text.performance} /> {INTRODUCTION.status.text.of}
        {'\u00A0'}
        <Highlight text={INTRODUCTION.status.text.project} />{' '}
        {INTRODUCTION.status.text.integrations}
      </Paragraph>
    </>
  )
}

export default StatusIntroduction
