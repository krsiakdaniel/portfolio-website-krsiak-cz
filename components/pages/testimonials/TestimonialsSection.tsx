import { FC } from 'react'

import Testimonial from '@/components/pages/testimonials/Testimonial'
import SectionDescription from '@/components/pages/testimonials/TestimonialSectionDescription'
import SectionHeader from '@/components/pages/testimonials/TestimonialSectionHeader'

import { TestimonialItem } from '@/lib/utils/interfaces/interfaces'

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: TestimonialItem[]
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({ title, description, testimonials }) => (
  <div className="mt-16">
    <SectionHeader title={title} />
    <SectionDescription description={description} />
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
