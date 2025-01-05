import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { YEARS } from '@/lib/utils/constants/yearsExperience'

const ResumeIntroduction = (): JSX.Element => {
  return (
    <div>
      <Heading1>{TEXT.resume}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.resume.introduction}>
        Skilled <Highlight text="React Developer" /> with {YEARS.react} years of experience in building high-performance
        web applications using <Highlight text="TypeScript" />, and <Highlight text="React" />.
      </p>
    </div>
  )
}

export default ResumeIntroduction
