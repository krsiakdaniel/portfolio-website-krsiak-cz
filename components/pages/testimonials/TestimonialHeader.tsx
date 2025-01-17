import { FC } from 'react'

import { TestimonialHeaderProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialHeader: FC<TestimonialHeaderProps> = ({ title }) => (
  <div className="border-b pb-2 text-2xl font-bold uppercase">{title}</div>
)

export default TestimonialHeader
