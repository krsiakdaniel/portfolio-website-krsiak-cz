import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { INTRODUCTION } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const StatusIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.status.introduction}>
        {INTRODUCTION.status.text.current} <Highlight text={INTRODUCTION.status.text.status} />{' '}
        {INTRODUCTION.status.text.showing} <Highlight text={INTRODUCTION.status.text.performance} />{' '}
        {INTRODUCTION.status.text.of} <Highlight text={INTRODUCTION.status.text.project} />{' '}
        {INTRODUCTION.status.text.integrations}
      </Paragraph>
    </>
  )
}

export default StatusIntroduction
