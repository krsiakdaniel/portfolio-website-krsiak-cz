import { FC } from 'react'

import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'
import CallToActionLink from '@/components/shared/call-to-action/CallToActionLink'
import CallToActionTexts from '@/components/shared/call-to-action/CallToActionTexts'

import { CallToActionProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToAction: FC<CallToActionProps> = ({
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
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
          <CallToActionTexts
            highlight={highlight}
            heading={heading}
            textMobileAndDesktop={textMobileAndDesktop}
            textDesktop={textDesktop}
          />
          <CallToActionLink link={link} linkText={linkText} isLinkExternal={isLinkExternal} dataTestId={dataTestId} />
        </div>

        <div className="hidden items-center justify-center md:flex md:w-1/3">
          <CallToActionIcon icon={icon} />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
