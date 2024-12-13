import Heading1 from '@/components/shared/Heading1'
import HighlightedText from '@/components/shared/HighlightedText'
import { TEXT } from '@/localization/texts_en'

const HeadingInfo = () => {
  return (
    <div>
      <Heading1>{TEXT.aboutMe}</Heading1>
      <p className="mt-4 text-lg text-neutral-600" data-testid="about-me-introduction">
        I am <HighlightedText>React Developer</HighlightedText>, who knows{' '}
        <HighlightedText>QA Automation</HighlightedText> and is capable of leading people as{' '}
        <HighlightedText>Team Leader</HighlightedText>.
      </p>
    </div>
  )
}

export default HeadingInfo
