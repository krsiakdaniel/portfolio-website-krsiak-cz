import HeadingSection from '@/components/shared/heading/HeadingSection'

import TestimonialDescription from '../testimonial-description/TestimonialDescription'
import Testimonial from '../testimonial/Testimonial'
import { type TestimonialsSectionProps } from './TestimonialsSection.types'

const TestimonialsSection = ({
  title,
  icon = '',
  iconAria = '',
  description,
  testimonials = [],
}: TestimonialsSectionProps) => (
  <div className="mt-20">
    <HeadingSection text={title} icon={icon} iconAria={iconAria} />
    <TestimonialDescription description={description} />
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          personPhoto={testimonial.personPhoto}
          personIcon={testimonial.personIcon}
          personName={testimonial.personName}
          personJob={testimonial.personJob}
          personCompany={testimonial.personCompany}
          testimonialText={testimonial.testimonialText}
          link={testimonial.link}
          linkText={testimonial.linkText}
        />
      ))}
    </div>
  </div>
)

export default TestimonialsSection
