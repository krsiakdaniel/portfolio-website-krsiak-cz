import { LinkColors } from '@/lib/utils/typeDefinitions/enums'

// Social Link Props
export type SocialLinkProps = {
  className?: string
  dataTestId: string
  href: string
  linkColor: LinkColors
  text: string
}
