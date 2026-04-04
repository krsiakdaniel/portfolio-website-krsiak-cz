import { StaticImageData } from 'next/image'

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
