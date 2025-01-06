import { FC } from 'react'

import Highlight from '@/components/shared/Highlight'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { YEARS } from '@/lib/utils/constants/yearsExperience'

const ResumeIntroduction: FC = (): JSX.Element => {
  return (
    <div>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.resume.introduction}>
        Skilled <Highlight text="React Developer" /> with {YEARS.react} years of experience using{' '}
        <Highlight text="TypeScript" /> to building high-performance web applications.
      </p>
    </div>
  )
}

export default ResumeIntroduction
