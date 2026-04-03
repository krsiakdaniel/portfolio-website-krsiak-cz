import { Icon } from '@/lib/types/interfaces'

export type ProjectListRowProps = {
  ariaLabel: string
  company: string
  icon: string
  id: string
  isFeatured?: boolean
  linkProjectPage: string
  role: string
  skillsIcons: Icon[]
  title: string
  years?: string
}
