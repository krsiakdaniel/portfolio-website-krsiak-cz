import HighlightedText from '@/components/shared/HighlightedText'
import { TEXT } from '@/localization/texts_en'
import Heading1 from '../shared/Heading1'

const ResumeInfo = () => {
  return (
    <div>
      <Heading1>{TEXT.resume}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid="resume-introduction">
        Experienced <HighlightedText>React Developer</HighlightedText> building web applications using{' '}
        <HighlightedText>JavaScript</HighlightedText>, <HighlightedText>TypeScript</HighlightedText>, and{' '}
        <HighlightedText>React</HighlightedText>.
      </p>
    </div>
  )
}

export default ResumeInfo
