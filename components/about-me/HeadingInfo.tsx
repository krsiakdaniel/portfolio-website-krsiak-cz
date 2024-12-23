import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'

const HeadingInfo = () => {
  return (
    <div>
      <Heading1>{TEXT.aboutMe}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.aboutMe.introduction}>
        I am <Highlight text="React Developer" />, who knows <Highlight text="QA Automation" /> and is capable of
        leading people as <Highlight text="Team Leader" />.
      </p>
    </div>
  )
}

export default HeadingInfo
