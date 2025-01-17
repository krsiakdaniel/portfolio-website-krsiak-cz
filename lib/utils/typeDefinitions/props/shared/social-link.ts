import { LinkColors } from '@/lib/utils/typeDefinitions/enums'

export type SocialLinkProps = {
  href: string
  text: string
  linkColor: LinkColors
  className?: string
  dataTestId: string
}
