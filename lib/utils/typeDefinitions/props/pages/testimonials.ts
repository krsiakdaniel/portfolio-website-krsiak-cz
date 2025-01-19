import { StaticImageData } from 'next/image'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

// Testimonial Props
export type TestimonialProps = {
  personJob: string
  personName: string
  personPhoto: StaticImageData
  testimonialText: string
}

// Testimonial Description Props
export type TestimonialDescriptionProps = {
  description: string
}

// Testimonial Header Props
export type TestimonialHeaderProps = {
  title: string
}

// Testimonial Person Info Props
export type TestimonialPersonInfoProps = {
  job: string
  name: string
  photo: StaticImageData
}

// Testimonials Section Props
export type TestimonialsSectionProps = {
  description: string
  testimonials: TestimonialItem[]
  title: string
}

// Testimonial Text Props
export type TestimonialTextProps = {
  text: string
}
