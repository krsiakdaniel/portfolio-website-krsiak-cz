import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

export type SocialLinkProps = {
  href: string
  text: string
  type: AlertTypeEnum
  dataTestId: string
  customCss?: string
}
