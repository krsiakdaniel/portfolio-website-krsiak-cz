import { LinkColors } from '@/lib/utils/typeDefinitions/enums'

// Social Link Props
export type SocialLinkProps = {
  href: string
  linkText: string
  linkColor: LinkColors
  className?: string
  dataTestId: string
}
