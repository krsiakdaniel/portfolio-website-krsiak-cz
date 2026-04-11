import { ArrowRight, ExternalLink } from 'lucide-react'

import { LinkButtonProps } from '@/components/shared/link-button/LinkButton.types'

import { CSS_GLOBAL_CLASSES } from '@/lib/utils/constants/cssGlobalClasses'

import { TEXT } from '@/localization'

const LinkButton = ({ href, linkText, isLinkExternal = false, dataTestId }: LinkButtonProps) => {
  const hoverAndFocusCss =
    'hover:bg-violet-800 focus:bg-violet-800 focus:outline-hidden focus:ring-4 focus:ring-violet-400'

  const baseCss =
    'flex select-none items-center justify-center space-x-2 rounded-lg px-5 py-3.5 text-center text-sm font-medium text-white min-w-full'

  return (
    <a
      href={href}
      target={isLinkExternal ? '_blank' : '_self'}
      rel={isLinkExternal ? 'noopener noreferrer' : 'next'}
      title={isLinkExternal ? `${linkText} - ${TEXT.opensInNewTab}` : linkText}
      className={`${baseCss} bg-violet-600 ${hoverAndFocusCss} ${CSS_GLOBAL_CLASSES.LINK_BUTTON}`}
      data-testid={dataTestId}
    >
      <span>{linkText}</span>
      {isLinkExternal ? (
        <ExternalLink aria-hidden="true" className="h-3 w-3" />
      ) : (
        <ArrowRight aria-hidden="true" className="block h-4 w-4" />
      )}
    </a>
  )
}

export default LinkButton
