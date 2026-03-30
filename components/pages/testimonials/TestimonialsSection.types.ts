import { TestimonialItem } from '@/lib/types/interfaces'

export type TestimonialsSectionProps = {
  title: string
  icon?: string
  iconAria?: string
  description: string
  testimonials: TestimonialItem[]
}
