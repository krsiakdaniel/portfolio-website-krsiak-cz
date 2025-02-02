import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const TestimonialsIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.testimonials.introduction}>
        {TEXT.kaizenText1} {ICON_EMOJI.flagJapan} <Highlight text={TEXT.kaizen} />{' '}
        {TEXT.kaizenText2}
      </Paragraph>
    </>
  )
}

export default TestimonialsIntroduction
