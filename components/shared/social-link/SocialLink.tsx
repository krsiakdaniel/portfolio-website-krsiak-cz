import { ExternalLink } from 'lucide-react'

import { SocialLinkProps } from '@/components/shared/social-link/SocialLink.types'

import { AlertColorVariantEnum } from '@/lib/types/enums'
import { TEXT } from '@/localization'

import { socialLinkTypeClasses } from './SocialLink.constants'

const SocialLink = ({
  href,
  text,
  type = AlertColorVariantEnum.Info,
  dataTestId,
  customCss = '',
}: SocialLinkProps) => {
  // Get CSS classes for the provided 'link type'
  const { bgColor, hoverColor, focusRingColor } = socialLinkTypeClasses[type]

  const hoverAndFocusCss = `${bgColor} ${hoverColor} ${focusRingColor} focus:outline-hidden focus:ring-4`

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-3 py-1.5 text-center text-sm font-medium text-white min-w-full sm:min-w-[200px]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${text} - ${TEXT.opensInNewTab}`}
      className={`${baseCss} ${hoverAndFocusCss} ${customCss}`}
      data-testid={dataTestId}
    >
      <span>{text}</span>
      <ExternalLink aria-hidden="true" className="h-3 w-3" />
    </a>
  )
}

export default SocialLink
