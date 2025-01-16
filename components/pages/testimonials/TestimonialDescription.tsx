import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TestimonialDescriptionProps } from '@/lib/utils/typeDefinitions/componentProps'

const TestimonialDescription: FC<TestimonialDescriptionProps> = ({ description }) => (
  <Paragraph>{description}</Paragraph>
)

export default TestimonialDescription
