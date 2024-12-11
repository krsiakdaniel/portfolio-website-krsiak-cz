import HighlightedText from '@/components/shared/HighlightedText'
import PageHeading from '@/components/shared/PageHeading'

const HeadingInfo = () => {
  return (
    <div>
      <PageHeading title="👨‍💻 About Me" />
      <p className="mt-4 text-lg text-neutral-600" data-testid="about-me-introduction">
        I am <HighlightedText>React Developer</HighlightedText>, who knows{' '}
        <HighlightedText>QA Automation</HighlightedText> and is capable of leading people as{' '}
        <HighlightedText>Team Leader</HighlightedText>.
      </p>
    </div>
  )
}

export default HeadingInfo
