import { GoBackLinkEnum } from '@/utils/interfaces/enums'

export type HeaderSectionProps = {
  title: string
  sectionID: string
  role: string
  years?: string | undefined
  company?: string
  goBackLink: GoBackLinkEnum
}

// error pages
export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}
