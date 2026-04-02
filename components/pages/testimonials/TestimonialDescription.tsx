import Paragraph from '@/components/shared/paragraph/Paragraph'

import { TestimonialDescriptionProps } from './TestimonialDescription.types'

const TestimonialDescription = ({ description }: TestimonialDescriptionProps) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
