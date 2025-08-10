import Paragraph from '@/components/shared/Paragraph'

import { TestimonialDescriptionProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialDescription = ({ description }: TestimonialDescriptionProps) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
