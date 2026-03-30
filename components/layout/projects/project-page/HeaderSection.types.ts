import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export type HeaderSectionProps = {
  icon?: string
  ariaLabel: string
  company?: string
  goBackLink: GoBackLinkEnum
  role?: string
  sectionID: string
  title?: string
  years?: string | undefined
}
