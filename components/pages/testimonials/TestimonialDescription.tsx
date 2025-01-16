import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TestimonialDescriptionProps } from '@/lib/utils/typeDefinitions/props'

const TestimonialDescription: FC<TestimonialDescriptionProps> = ({ description }) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
