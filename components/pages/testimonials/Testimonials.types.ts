import { StaticImageData } from 'next/image'

import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

export type TestimonialProps = {
  personPhoto: StaticImageData
  personIcon: string
  personName: string
  personJob: string
  personCompany: string
  testimonialText: string
  link?: string
  linkText?: string
}

export type TestimonialDescriptionProps = {
  description: string
}

export type TestimonialHeaderProps = {
  title: string
}

export type TestimonialPersonInfoProps = {
  photo: StaticImageData
  name: string
  icon: string
  job: string
  company: string
  link?: string
  linkText?: string
}

export type TestimonialsSectionProps = {
  title: string
  icon?: string
  iconAria?: string
  description: string
  testimonials: TestimonialItem[]
}

export type TestimonialTextProps = {
  text: string
}
