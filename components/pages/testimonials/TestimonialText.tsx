import Paragraph from '@/components/shared/paragraph/Paragraph'

import { TestimonialTextProps } from './TestimonialText.types'

const TestimonialText = ({ text }: TestimonialTextProps) => {
  return (
    <blockquote>
      <Paragraph marginTop="mt-0" size="text-2xl" customCss="font-medium">
        {text}
      </Paragraph>
    </blockquote>
  )
}
export default TestimonialText
