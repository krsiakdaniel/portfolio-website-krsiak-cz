import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { TEXT } from '@/localization/english'

const HeadingInfo = (): JSX.Element => {
  return (
    <div>
      <Heading1>{TEXT.aboutMe}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.aboutMe.introduction}>
        I am a <Highlight text="React Developer" /> with expertise in <Highlight text="QA Automation" /> and experience
        in leading teams as a <Highlight text="Team Leader" />.
      </p>
    </div>
  )
}

export default HeadingInfo
