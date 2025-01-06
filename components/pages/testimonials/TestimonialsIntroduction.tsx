import Highlight from '@/components/shared/Highlight'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const TestimonialsIntroduction = (): JSX.Element => {
  return (
    <div>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.testimonials.introduction}>
        I follow the Japanese 🇯🇵 philosophy of <Highlight text="Kaizen 改善" /> my whole life, continuously seeking
        improvement in my work and personal growth.
      </p>
    </div>
  )
}

export default TestimonialsIntroduction
