import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TestimonialTextProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialText: FC<TestimonialTextProps> = ({ text }) => {
  return (
    <blockquote>
      <Paragraph size="text-2xl">{text}</Paragraph>
    </blockquote>
  )
}
export default TestimonialText
