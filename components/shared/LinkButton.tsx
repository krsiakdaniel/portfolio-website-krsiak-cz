import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'
import { LinkButtonProps } from '@/lib/utils/typeDefinitions/props/shared/link-button'

const LinkButton: FC<LinkButtonProps> = ({
  href,
  linkText,
  isLinkExternal = false,
  dataTestId,
}): JSX.Element => {
  const hoverAndFocusCSS =
    'hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400'

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-5 py-3.5 text-center text-sm font-medium text-white min-w-full sm:min-w-[248px]'

  return (
    <a
      href={href}
      target={isLinkExternal ? '_blank' : '_self'}
      rel={isLinkExternal ? 'noopener noreferrer' : 'next'}
      title={isLinkExternal ? `${linkText} - ${TEXT.opensInNewTab}` : linkText}
      className={`${baseCss} bg-violet-600 ${hoverAndFocusCSS} ${CSS_GLOBAL_CLASSES.LINK_BUTTON}`}
      data-testid={dataTestId}
    >
      <span>{linkText}</span>
      {isLinkExternal ? (
        <IconExternalLink />
      ) : (
        <IconArrow arrowDirection={ArrowDirectionEnum.Right} />
      )}
    </a>
  )
}

export default LinkButton
