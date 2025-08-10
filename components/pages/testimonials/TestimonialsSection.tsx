import Testimonial from '@/components/pages/testimonials/Testimonial'
import TestimonialDescription from '@/components/pages/testimonials/TestimonialDescription'
import HeadingSection from '@/components/shared/HeadingSection'

import { TestimonialsSectionProps } from '@/lib/utils/typeDefinitions/props/pages/testimonials'

const TestimonialsSection = ({
  title,
  icon = '',
  description,
  testimonials = [],
}: TestimonialsSectionProps) => (
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
