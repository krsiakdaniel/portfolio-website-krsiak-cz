import { type StaticImageData } from 'next/image'

export type TestimonialPersonInfoProps = {
  photo: StaticImageData
  name: string
  icon: string
  job: string
  company: string
  link?: string
  linkText?: string
}
