import Heading1 from '@/components/shared/Heading1'
import Highlight from '@/components/shared/Highlight'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'

const ResumeInfo = () => {
  return (
    <div>
      <Heading1>{TEXT.resume}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.resume.introduction}>
        Experienced <Highlight text="React Developer" /> building web applications using <Highlight text="JavaScript" />
        , <Highlight text="TypeScript" />, and <Highlight text="React" />.
      </p>
    </div>
  )
}

export default ResumeInfo
