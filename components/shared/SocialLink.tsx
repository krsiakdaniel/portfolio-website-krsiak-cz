import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { LinkColorsEnum } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkProps } from '@/lib/utils/typeDefinitions/props/shared/social-link'

const SocialLink: FC<SocialLinkProps> = ({
  href,
  linkText,
  className = '',
  linkColor = LinkColorsEnum.Gray,
  dataTestId,
}): JSX.Element => {
  // Define variables for CSS classes for the 'linkColor'
  let bgColor, hoverColor, focusRingColor

  // Use CSS classes based on the provided 'linkColor'
  switch (linkColor) {
    case LinkColorsEnum.Red:
      bgColor = 'bg-red-700'
      hoverColor = 'hover:bg-red-800'
      focusRingColor = 'focus:ring-red-300'
      break
    case LinkColorsEnum.Blue:
      bgColor = 'bg-blue-700'
      hoverColor = 'hover:bg-blue-800'
      focusRingColor = 'focus:ring-blue-300'
      break
    case LinkColorsEnum.Gray:
      bgColor = 'bg-gray-700'
      hoverColor = 'hover:bg-gray-800'
      focusRingColor = 'focus:ring-gray-300'
      break
    case LinkColorsEnum.Yellow:
      bgColor = 'bg-yellow-700'
      hoverColor = 'hover:bg-yellow-800'
      focusRingColor = 'focus:ring-yellow-300'
      break
    default:
      bgColor = 'bg-gray-700'
      hoverColor = 'hover:bg-gray-800'
      focusRingColor = 'focus:ring-gray-300'
      break
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${linkText} - Opens in a new tab`}
      className={`flex items-center justify-center space-x-2 rounded-lg text-sm sm:min-w-[248px] ${bgColor} px-5 py-2.5 text-center font-medium text-white ${hoverColor} focus:outline-none focus:ring-4 ${focusRingColor} ${className}`}
      data-testid={dataTestId}
    >
      <span>{linkText}</span>
      <IconExternalLink />
    </a>
  )
}

export default SocialLink
