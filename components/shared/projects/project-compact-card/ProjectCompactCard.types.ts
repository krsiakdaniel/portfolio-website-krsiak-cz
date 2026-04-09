import { Icon } from '@/lib/types/interfaces'

export type ProjectCompactCardProps = {
  ariaLabel: string
  company: string
  dataTestId: string
  icon: string
  image: string
  isFeatured?: boolean
  linkProjectPage: string
  linkText: string
  priority?: boolean
  role: string
  skillsIcons: Icon[]
  title: string
  years?: string
}
