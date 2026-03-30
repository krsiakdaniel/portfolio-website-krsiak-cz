import Paragraph from '@/components/shared/Paragraph'

import { TestimonialDescriptionProps } from './TestimonialDescription.types'

const TestimonialDescription = ({ description }: TestimonialDescriptionProps) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
