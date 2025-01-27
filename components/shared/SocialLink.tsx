import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { LinkColorsEnum } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkProps } from '@/lib/utils/typeDefinitions/props/shared/social-link'

const SocialLink: FC<SocialLinkProps> = ({
  href,
  linkText,
  linkColor = LinkColorsEnum.Gray,
  dataTestId,
  customCss = '',
}): JSX.Element => {
  // Define variables for CSS classes for the 'linkColor'
  let bgColor, hoverColor, focusRingColor

  // Use CSS classes based on the provided 'linkColor'
  switch (linkColor) {
    case LinkColorsEnum.Red:
      bgColor = 'bg-red-600'
      hoverColor = 'hover:bg-red-800'
      focusRingColor = 'focus:ring-red-400'
      break
    case LinkColorsEnum.Blue:
      bgColor = 'bg-blue-600'
      hoverColor = 'hover:bg-blue-800'
      focusRingColor = 'focus:ring-blue-400'
      break
    case LinkColorsEnum.Gray:
      bgColor = 'bg-gray-600'
      hoverColor = 'hover:bg-gray-800'
      focusRingColor = 'focus:ring-gray-400'
      break
    case LinkColorsEnum.Yellow:
      bgColor = 'bg-yellow-600'
      hoverColor = 'hover:bg-yellow-800'
      focusRingColor = 'focus:ring-yellow-400'
      break
    default:
      bgColor = 'bg-gray-600'
      hoverColor = 'hover:bg-gray-800'
      focusRingColor = 'focus:ring-gray-400'
      break
  }

  const hoverAndFocusCSS = `${bgColor} ${hoverColor} ${focusRingColor} focus:outline-none focus:ring-4`

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-5 py-3.5 text-center text-sm font-medium text-white min-w-full sm:min-w-[248px]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${linkText} - ${TEXT.opensInNewTab}`}
      className={`${baseCss} ${hoverAndFocusCSS} ${customCss}`}
      data-testid={dataTestId}
    >
      <span>{linkText}</span>
      <IconExternalLink />
    </a>
  )
}

export default SocialLink
