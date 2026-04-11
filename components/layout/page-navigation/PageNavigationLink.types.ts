import { type ArrowDirectionEnum } from '@/lib/types/enums'

export type PageNavigationLinkProps = {
  href: string
  icon: string
  text: string
  arrowDirection?: ArrowDirectionEnum
  dataTestId: string | undefined
}
