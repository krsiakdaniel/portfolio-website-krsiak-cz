import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { GLOBAL_CSS_CLASS } from '@/lib/utils/constants/global-css-classes/index'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

const LinkButton: FC<LinkButtonProps> = ({ href, linkText, isLinkExternal = false, dataTestId }) => {
  const hoverAndFocusCSS =
    'hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400'

  return (
    <div className="mt-8">
      <a
        href={href}
        target={isLinkExternal ? '_blank' : '_self'}
        rel={isLinkExternal ? 'noopener noreferrer' : 'next'}
        title={isLinkExternal ? `${linkText} - ${TEXT.opensInNewTab}` : linkText}
        className={`inline-flex w-[248px] select-none items-center justify-center space-x-2 rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white ${hoverAndFocusCSS} ${GLOBAL_CSS_CLASS.LINK_BUTTON}`}
        data-testid={dataTestId}
      >
        <span>{linkText}</span>
        {isLinkExternal ? <IconExternalLink /> : <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
      </a>
    </div>
  )
}

export default LinkButton
