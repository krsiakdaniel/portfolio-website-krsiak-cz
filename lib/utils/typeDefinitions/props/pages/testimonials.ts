import { StaticImageData } from 'next/image'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

// Testimonial Description Props
export type TestimonialDescriptionProps = {
  description: string
}

// Testimonial Header Props
export type TestimonialHeaderProps = {
  title: string
}

// Testimonial Props
export type TestimonialProps = {
  personJob: string
  personName: string
  personPhoto: StaticImageData
  testimonialText: string
}

// Testimonials Section Props
export type TestimonialsSectionProps = {
  description: string
  testimonials: TestimonialItem[]
  title: string
}
