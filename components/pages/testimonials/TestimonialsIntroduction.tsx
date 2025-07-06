import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const TestimonialsIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.testimonials.introduction}>
        {TEXT.kaizenText1}{' '}
        <span role="img" aria-label={ARIA_LABELS.emoji.flag.japan}>
          {ICON_EMOJI.flagJapan}
        </span>
        {'\u00A0'}
        <Highlight text={TEXT.kaizen} /> {TEXT.kaizenText2}
      </Paragraph>
    </>
  )
}

export default TestimonialsIntroduction
