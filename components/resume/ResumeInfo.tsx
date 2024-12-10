import PageHeading from '@/components/shared/PageHeading'
import { TEXT } from '@/localization/texts_en'
import { ReactNode } from 'react'

interface HighlightedTextProps {
  children: ReactNode
}

const HighlightedText = ({ children }: HighlightedTextProps) => {
  return <span className="font-bold text-violet-600">{children}</span>
}

const ResumeInfo = () => {
  return (
    <div>
      <PageHeading title={TEXT.resume} />
      <p className="mt-4 text-lg text-neutral-600" data-testid="resume-introduction">
        Experienced <HighlightedText>React Developer</HighlightedText> building web applications using{' '}
        <HighlightedText>JavaScript</HighlightedText>, <HighlightedText>TypeScript</HighlightedText>, and{' '}
        <HighlightedText>React</HighlightedText>. Skilled in <HighlightedText>responsive UI design</HighlightedText>.
      </p>
    </div>
  )
}

export default ResumeInfo
