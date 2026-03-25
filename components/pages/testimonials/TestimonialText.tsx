import { TestimonialTextProps } from '@/components/pages/testimonials/Testimonials.types'
import Paragraph from '@/components/shared/Paragraph'

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
