import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

export type PageNavigationLinkProps = {
  href: string
  icon: string
  text: string
  arrowDirection?: ArrowDirectionEnum
  dataTestId: string | undefined
}
