import { AlertTypeEnum } from '@/lib/types/enums'

export type SocialLinkProps = {
  href: string
  text: string
  type: AlertTypeEnum
  dataTestId: string
  customCss?: string
}
