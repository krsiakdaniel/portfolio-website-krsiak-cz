import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export type HeaderSectionProps = {
  title?: string
  sectionID: string
  role?: string
  years?: string | undefined
  company?: string
  goBackLink: GoBackLinkEnum
}
