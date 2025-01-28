import { FC } from 'react'

import Paragraph from '@/components/shared/Paragraph'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { TestimonialTextProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialText: FC<TestimonialTextProps> = ({ text }) => {
  return (
    <blockquote>
      <Paragraph marginTop="mt-0" size="text-2xl" customCss={`font-medium ${CSS_GLOBAL_CLASSES.TESTIMONIAL_TEXT}`}>
        {text}
      </Paragraph>
    </blockquote>
  )
}
export default TestimonialText
