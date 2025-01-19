import { FC } from 'react'

import IconArrow from '@/components/icons/IconArrow'
import Heading2 from '@/components/shared/Heading2'
import Highlight from '@/components/shared/Highlight'
import Paragraph from '@/components/shared/Paragraph'

import IconExternalLink from '@/components/icons/IconExternalLink'

import { ArrowDirectionEnum } from '@/lib/utils/typeDefinitions/enums'

import { CallToActionProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

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
    <section className="mt-20 rounded-lg bg-blue-50 p-8 md:p-16">
      <div className="flex">
        <div className="md:w-2/3">
          <div className="mb-2 uppercase">
            <Highlight text={highlight} />
          </div>
          <Heading2 textColor="text-neutral-900">{heading}</Heading2>
          <Paragraph marginTop="mt-2" size="text-xl" textColor="text-neutral-900" customCss="tracking-tight">
            {description}
          </Paragraph>

          <div className="mt-8">
            <a
              href={link}
              target={isLinkExternal ? '_blank' : '_self'}
              rel="noopener noreferrer"
              title={isLinkExternal ? `${linkText} - Opens in a new tab` : `${linkText}`}
              className="flex max-w-[300px] items-center justify-center space-x-2 rounded-lg bg-violet-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-800 focus:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300"
              data-testid={dataTestId}
            >
              <span>{linkText}</span>
              {isLinkExternal ? <IconExternalLink /> : <IconArrow arrowDirection={ArrowDirectionEnum.Right} />}
            </a>
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <div className="text-9xl">{icon}</div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
