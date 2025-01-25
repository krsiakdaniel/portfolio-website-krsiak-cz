import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

const LinkButton: FC<LinkButtonProps> = ({
  href,
  linkText,
  isLinkExternal = false,
  dataTestId,
  maxWidth = '176px',
}) => {
  const hoverAndFocusCSS =
    'hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400'

  return (
    <div className="mt-8">
      <a
        href={href}
        target={isLinkExternal ? '_blank' : '_self'}
        rel={isLinkExternal ? 'noopener noreferrer' : 'next'}
        title={isLinkExternal ? `${linkText} - ${TEXT.opensInNewTab}` : linkText}
        className={`flex select-none items-center justify-center space-x-2 rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white max-w-[${maxWidth}] ${hoverAndFocusCSS}`}
        data-testid={dataTestId}
      >
        <span>{linkText}</span>
        {isLinkExternal ? <IconExternalLink /> : <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
      </a>
    </div>
  )
}

export default LinkButton
