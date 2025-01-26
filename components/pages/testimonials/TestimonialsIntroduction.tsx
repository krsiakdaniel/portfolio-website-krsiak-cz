import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

// FIXME: refactor fiv to fragment <>
const TestimonialsIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <Paragraph dataTestId={DATA_TEST_IDS.page.testimonials.introduction}>
        I follow the Japanese 🇯🇵 philosophy of <Highlight text="Kaizen 改善" /> my whole life, continuously seeking
        personal growth and improvement in my work.
      </Paragraph>
    </div>
  )
}

export default TestimonialsIntroduction
