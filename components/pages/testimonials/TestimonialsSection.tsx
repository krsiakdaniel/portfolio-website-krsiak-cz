import { FC } from 'react'

import Testimonial from '@/components/pages/testimonials/Testimonial'
import TestimonialDescription from '@/components/pages/testimonials/TestimonialDescription'
import HeadingSection from '@/components/shared/HeadingSection'

import { TestimonialsSectionProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  title,
  icon = '',
  description,
  testimonials = [],
}) => (
  <div className="mt-20">
    <HeadingSection text={title} icon={icon} />
    <TestimonialDescription description={description} />
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          personPhoto={testimonial.personPhoto}
          personIcon={testimonial.personIcon}
          personName={testimonial.personName}
          personJob={testimonial.personJob}
          testimonialText={testimonial.testimonialText}
        />
      ))}
    </div>
  </div>
)

export default TestimonialsSection
