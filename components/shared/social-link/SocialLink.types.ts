import { AlertColorVariantEnum } from '@/lib/types/enums'

export type SocialLinkProps = {
  href: string
  text: string
  type: AlertColorVariantEnum
  dataTestId: string
  customCss?: string
}
