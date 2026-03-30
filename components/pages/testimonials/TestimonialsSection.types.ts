import { TestimonialItem } from '@/lib/utils/typeDefinitions/interfaces'

export type TestimonialsSectionProps = {
  title: string
  icon?: string
  iconAria?: string
  description: string
  testimonials: TestimonialItem[]
}
