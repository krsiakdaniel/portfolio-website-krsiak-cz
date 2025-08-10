import Paragraph from '@/components/shared/Paragraph'

import { TestimonialTextProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

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
