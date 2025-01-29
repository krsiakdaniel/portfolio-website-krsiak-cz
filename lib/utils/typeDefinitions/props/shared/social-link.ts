import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'

// Social Link Props
export type SocialLinkProps = {
  href: string
  linkText: string
  linkColor: AlertTypeEnum
  dataTestId: string
  customCss?: string
}
