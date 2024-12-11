import HighlightedText from '@/components/shared/HighlightedText'
import PageHeading from '@/components/shared/PageHeading'
import { TEXT } from '@/localization/texts_en'

const ResumeInfo = () => {
  return (
    <div>
      <PageHeading title={TEXT.resume} />
      <p className="mt-4 text-lg text-neutral-600" data-testid="resume-introduction">
        Experienced <HighlightedText>React Developer</HighlightedText> building web applications using{' '}
        <HighlightedText>JavaScript</HighlightedText>, <HighlightedText>TypeScript</HighlightedText>, and{' '}
        <HighlightedText>React</HighlightedText>.
      </p>
    </div>
  )
}

export default ResumeInfo
