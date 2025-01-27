import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { ICON_EMOJI } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const TestimonialsIntroduction: FC = (): JSX.Element => {
  return (
    <>
      <Paragraph dataTestId={DATA_TEST_IDS.page.testimonials.introduction}>
        I follow the Japanese {ICON_EMOJI.flagJapan} philosophy of <Highlight text="Kaizen 改善" /> my whole life,
        continuously seeking personal growth and improvement in my work.
      </Paragraph>
    </>
  )
}

export default TestimonialsIntroduction
