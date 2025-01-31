import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { TestimonialTextProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialText: FC<TestimonialTextProps> = ({ text }) => {
  return (
    <blockquote>
      <Paragraph marginTop="mt-0" size="text-2xl" customCss="font-medium">
        {text}
      </Paragraph>
    </blockquote>
  )
}
export default TestimonialText
