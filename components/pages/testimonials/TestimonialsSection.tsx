import { FC } from 'react'

import Testimonial from '@/components/pages/testimonials/Testimonial'
import TestimonialDescription from '@/components/pages/testimonials/TestimonialDescription'
import TestimonialHeader from '@/components/pages/testimonials/TestimonialHeader'

import { TestimonialsSectionProps } from '@/lib/utils/typeDefinitions/props'

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ title, description, testimonials }) => (
  <div className="mt-16">
    <TestimonialHeader title={title} />
    <TestimonialDescription description={description} />
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          personPhoto={testimonial.personPhoto}
          personName={testimonial.personName}
          personJob={testimonial.personJob}
          testimonialText={testimonial.testimonialText}
        />
      ))}
    </div>
  </div>
)

export default TestimonialsSection
