import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

interface TestimonialDescriptionProps {
  description: string
}

const TestimonialDescription: FC<TestimonialDescriptionProps> = ({ description }) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
