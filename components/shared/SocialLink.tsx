import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { LinkColors } from '@/lib/utils/typeDefinitions/enums'

import { SocialLinkProps } from '@/lib/utils/typeDefinitions/props'

const SocialLink: FC<SocialLinkProps> = ({
  href,
  text,
  className = '',
  linkColor = LinkColors.Gray,
  dataTestId,
}): JSX.Element => {
  let bgColor, hoverColor, focusRingColor

  switch (linkColor) {
    case LinkColors.Red:
      bgColor = 'bg-red-800'
      hoverColor = 'hover:bg-red-900'
      focusRingColor = 'focus:ring-red-300'
      break
    case LinkColors.Blue:
      bgColor = 'bg-blue-800'
      hoverColor = 'hover:bg-blue-900'
      focusRingColor = 'focus:ring-blue-300'
      break
    case LinkColors.Gray:
      bgColor = 'bg-gray-800'
      hoverColor = 'hover:bg-gray-900'
      focusRingColor = 'focus:ring-gray-300'
      break
    case LinkColors.Yellow:
      bgColor = 'bg-yellow-800'
      hoverColor = 'hover:bg-yellow-900'
      focusRingColor = 'focus:ring-yellow-300'
      break
    default:
      bgColor = 'bg-gray-800'
      hoverColor = 'hover:bg-gray-900'
      focusRingColor = 'focus:ring-gray-300'
      break
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Opens in a new tab"
      className={`flex items-center justify-center rounded-lg text-sm sm:min-w-[248px] ${bgColor} px-5 py-2.5 text-center font-medium text-white ${hoverColor} focus:outline-none focus:ring-4 ${focusRingColor} ${className}`}
      data-testid={dataTestId}
    >
      {text}
      <span className="ml-2">
        <IconExternalLink />
      </span>
    </a>
  )
}

export default SocialLink
