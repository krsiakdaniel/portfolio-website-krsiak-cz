import Highlight from '@/components/shared/highlight/Highlight'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { STATUS_INTRODUCTION } from '@/features/status/localization'

const StatusIntroduction = () => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.status.introduction}>
        {STATUS_INTRODUCTION.text.showing}
        {'\u00A0'}
        <Highlight text={STATUS_INTRODUCTION.text.performance} /> {STATUS_INTRODUCTION.text.of}
        {'\u00A0'}
        <Highlight text={STATUS_INTRODUCTION.text.project} />{' '}
        {STATUS_INTRODUCTION.text.integrations}
      </Paragraph>
    </>
  )
}

export default StatusIntroduction
