import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { socialLinkTypeClasses } from '@/lib/data/shared/socialLinkTypeClasses'

import { TEXT } from '@/localization/english'

import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkProps } from '@/lib/utils/typeDefinitions/props/shared/social-link'

const SocialLink: FC<SocialLinkProps> = ({
  href,
  text,
  type = AlertTypeEnum.Info,
  dataTestId,
  customCss = '',
}): JSX.Element => {
  // Get CSS classes for the provided 'link type'
  const { bgColor, hoverColor, focusRingColor } = socialLinkTypeClasses[type]

  const hoverAndFocusCSS = `${bgColor} ${hoverColor} ${focusRingColor} focus:outline-hidden focus:ring-4`

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-5 py-3.5 text-center text-sm font-medium text-white min-w-full sm:min-w-[248px]'

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
