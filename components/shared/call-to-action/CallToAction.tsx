import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import Heading2 from '@/components/shared/Heading2'
import Highlight from '@/components/shared/Highlight'

import IconExternalLink from '@/components/icons/IconExternalLink'
import { NavigationDirectionEnum } from '@/lib/utils/interfaces/enums'

interface CallToActionProps {
  highlight: string
  heading: string
  description: string
  link: string
  isLinkExternal?: boolean
  linkText: string
  dataTestId: string
  icon: string
}

const CallToAction: FC<CallToActionProps> = ({
  highlight,
  heading,
  description,
  link,
  isLinkExternal,
  linkText,
  dataTestId,
  icon,
}): JSX.Element => {
  return (
    <div className="mt-16 rounded-lg bg-blue-50 p-8 md:p-16">
      <div className="flex">
        <div className="md:w-2/3">
          <div className="mb-2 uppercase">
            <Highlight text={highlight} />
          </div>
          <Heading2 textColor="text-neutral-900">{heading}</Heading2>
          <p className="mt-3 text-xl tracking-tight text-neutral-900">{description}</p>
          <div className="mt-8">
            <a
              href={link}
              target={isLinkExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
              title="Opens in a new tab"
              className="text-md flex max-w-[300px] items-center justify-center rounded-lg bg-violet-700 px-5 py-2.5 text-center font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300"
              data-testid={dataTestId}
            >
              {linkText}
              {isLinkExternal ? (
                <span className="ml-2">
                  <IconExternalLink />
                </span>
              ) : (
                <IconArrow direction={NavigationDirectionEnum.Right} />
              )}
            </a>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <div className="text-9xl">{icon}</div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction