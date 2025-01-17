import { StaticImageData } from 'next/image'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

export type TestimonialProps = {
  personPhoto: StaticImageData
  personName: string
  personJob: string
  testimonialText: string
}

export type TestimonialDescriptionProps = {
  description: string
}

export type TestimonialHeaderProps = {
  title: string
}

export type TestimonialsSectionProps = {
  title: string
  description: string
  testimonials: TestimonialItem[]
}
