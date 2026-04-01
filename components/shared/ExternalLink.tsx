import { ExternalLink as ExternalLinkIcon } from 'lucide-react'

import { ExternalLinkProps } from '@/components/shared/ExternalLink.types'

const ExternalLink = ({ href, text, title, dataTestId = '' }: ExternalLinkProps) => {
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
          <ExternalLinkIcon className="h-3 w-3" />
        </span>
      </a>
    </span>
  )
}

export default ExternalLink
