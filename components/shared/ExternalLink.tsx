import { FC } from 'react'

import { ExternalLinkProps } from '@/lib/utils/typeDefinitions/props/shared/external-link'

import IconExternalLink from '@/components/icons/IconExternalLink'

const ExternalLink: FC<ExternalLinkProps> = ({ href, text, title, dataTestId = '' }) => {
  return (
    <span className="leading-tight">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center font-medium text-violet-600 underline hover:text-violet-800 hover:no-underline"
        title={title}
        data-testid={dataTestId}
      >
        {text}
        <span className="ml-2">
          <IconExternalLink />
        </span>
      </a>
    </span>
  )
}

export default ExternalLink
