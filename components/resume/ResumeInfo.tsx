import Heading1 from '@/components/shared/Heading1'
import HighlightedText from '@/components/shared/HighlightedText'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'

const ResumeInfo = () => {
  return (
    <div>
      <Heading1>{TEXT.resume}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid={DATA_TEST_IDS.page.resume.introduction}>
        Experienced <HighlightedText>React Developer</HighlightedText> building web applications using{' '}
        <HighlightedText>JavaScript</HighlightedText>, <HighlightedText>TypeScript</HighlightedText>, and{' '}
        <HighlightedText>React</HighlightedText>.
      </p>
    </div>
  )
}

export default ResumeInfo
