import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

// Social Link Props
export type SocialLinkProps = {
  href: string
  text: string
  type: AlertTypeEnum
  dataTestId: string
  customCss?: string
}
