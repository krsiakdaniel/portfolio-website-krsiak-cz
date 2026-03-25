import { TestimonialDescriptionProps } from '@/components/pages/testimonials/Testimonials.types'
import Paragraph from '@/components/shared/Paragraph'

const TestimonialDescription = ({ description }: TestimonialDescriptionProps) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
