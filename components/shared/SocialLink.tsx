import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'
import { LinkColors } from '@/lib/utils/interfaces/enums'

type SocialLinkProps = {
  href: string
  text: string
  linkColor: LinkColors
  className?: string
  dataTestId: string
}

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
      bgColor = 'bg-red-700'
      hoverColor = 'hover:bg-red-800'
      focusRingColor = 'focus:ring-red-300'
      break
    case LinkColors.Blue:
      bgColor = 'bg-blue-700'
      hoverColor = 'hover:bg-blue-800'
      focusRingColor = 'focus:ring-blue-300'
      break
    case LinkColors.Gray:
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
      title="Opens in a new tab"
      className={`xt-md flex w-[248px] items-center justify-center rounded-lg ${bgColor} px-5 py-2.5 text-center font-medium text-white ${hoverColor} focus:outline-none focus:ring-4 ${focusRingColor} ${className}`}
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
