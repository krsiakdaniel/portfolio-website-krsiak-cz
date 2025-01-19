import { LinkColorsEnum } from '@/lib/utils/typeDefinitions/enums'

// Social Link Props
export type SocialLinkProps = {
  href: string
  linkText: string
  linkColor: LinkColorsEnum
  className?: string
  dataTestId: string
}
