import { FC } from 'react'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { AlertTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { SocialLinkProps } from '@/lib/utils/typeDefinitions/props/shared/social-link'

// Define shared neutral color constants
const NEUTRAL_BG_COLOR = 'bg-neutral-600'
const NEUTRAL_HOVER_COLOR = 'hover:bg-neutral-800'
const NEUTRAL_FOCUS_RING_COLOR = 'focus:ring-neutral-400'

// TODO: refactor this later, not really used as before, now in ALERT only
const SocialLink: FC<SocialLinkProps> = ({
  href,
  linkText,
  linkColor = AlertTypeEnum.Neutral,
  dataTestId,
  customCss = '',
}): JSX.Element => {
  // Define variables for CSS classes for the 'linkColor'
  let bgColor, hoverColor, focusRingColor

  // Use CSS classes based on the provided 'linkColor'
  switch (linkColor) {
    case AlertTypeEnum.Info:
      bgColor = 'bg-blue-600'
      hoverColor = 'hover:bg-blue-800'
      focusRingColor = 'focus:ring-blue-400'
      break
    case AlertTypeEnum.Success:
      bgColor = 'bg-green-600'
      hoverColor = 'hover:bg-green-800'
      focusRingColor = 'focus:ring-green-400'
      break
    case AlertTypeEnum.Warning:
      bgColor = 'bg-yellow-600'
      hoverColor = 'hover:bg-yellow-800'
      focusRingColor = 'focus:ring-yellow-400'
      break
    case AlertTypeEnum.Danger:
      bgColor = 'bg-red-600'
      hoverColor = 'hover:bg-red-800'
      focusRingColor = 'focus:ring-red-400'
      break
    case AlertTypeEnum.Neutral:
      bgColor = NEUTRAL_BG_COLOR
      hoverColor = NEUTRAL_HOVER_COLOR
      focusRingColor = NEUTRAL_FOCUS_RING_COLOR
      break
    default:
      bgColor = NEUTRAL_BG_COLOR
      hoverColor = NEUTRAL_HOVER_COLOR
      focusRingColor = NEUTRAL_FOCUS_RING_COLOR
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
