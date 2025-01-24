import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import IconExternalLink from '@/components/icons/IconExternalLink'

import { TEXT } from '@/localization/english'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionLinkProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionLink: FC<CallToActionLinkProps> = ({ link, linkText, isLinkExternal, dataTestId }) => {
  return (
    <div className="mt-8">
      <a
        href={link}
        target={isLinkExternal ? '_blank' : '_self'}
        rel="noopener noreferrer"
        title={isLinkExternal ? `${linkText} - ${TEXT.opensInNewTab}` : `${linkText}`}
        className="flex max-w-[300px] items-center justify-center space-x-2 rounded-lg bg-violet-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-400"
        data-testid={dataTestId}
      >
        <span>{linkText}</span>
        {isLinkExternal ? <IconExternalLink /> : <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
      </a>
    </div>
  )
}

export default CallToActionLink
