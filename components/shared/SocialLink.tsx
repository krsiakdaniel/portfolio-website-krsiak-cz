import IconExternalLink from '@/components/icons/IconExternalLink'
import { SocialLinkProps } from '@/components/shared/SocialLink.types'

import { socialLinkTypeClasses } from '@/data/shared/socialLinkTypeClasses'
import { AlertTypeEnum } from '@/lib/types/enums'
import { TEXT } from '@/localization'

const SocialLink = ({
  href,
  text,
  type = AlertTypeEnum.Info,
  dataTestId,
  customCss = '',
}: SocialLinkProps) => {
  // Get CSS classes for the provided 'link type'
  const { bgColor, hoverColor, focusRingColor } = socialLinkTypeClasses[type]

  const hoverAndFocusCSS = `${bgColor} ${hoverColor} ${focusRingColor} focus:outline-hidden focus:ring-4`

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-3 py-1.5 text-center text-sm font-medium text-white min-w-full sm:min-w-[200px]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${text} - ${TEXT.opensInNewTab}`}
      className={`${baseCss} ${hoverAndFocusCSS} ${customCss}`}
      data-testid={dataTestId}
    >
      <span>{text}</span>
      <IconExternalLink />
    </a>
  )
}

export default SocialLink
