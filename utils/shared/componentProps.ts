import { GoBackLinkType } from '@/utils/interfaces/types'

export type HeaderSectionProps = {
  title: string
  sectionID: string
  role: string
  years?: string | undefined
  company?: string
  goBackLink: GoBackLinkType
}

// error pages
export type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}
