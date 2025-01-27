import { FC } from 'react'

import CallToActionBubbles from '@/components/shared/call-to-action/CallToActionBubbles'
import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'
import CallToActionTexts from '@/components/shared/call-to-action/CallToActionTexts'
import LinkButton from '@/components/shared/LinkButton'

import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToAction: FC<CallToActionProps> = ({
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
  link,
  isLinkExternal = false,
  linkText,
  dataTestId,
  icon,
}): JSX.Element => {
  return (
    <div className="group relative mt-20">
      <CallToActionBubbles />

      <section className="relative rounded-lg border border-blue-300 bg-blue-100 p-8 transition duration-500 hover:border-blue-400 md:p-16">
        <div className="flex">
          <div className="md:w-2/3">
            <CallToActionTexts
              icon={icon}
              highlight={highlight}
              heading={heading}
              textMobileAndDesktop={textMobileAndDesktop}
              textDesktop={textDesktop}
            />
            <div className="mt-8 flex max-w-[248px]">
              <LinkButton href={link} linkText={linkText} isLinkExternal={isLinkExternal} dataTestId={dataTestId} />
            </div>
          </div>

          <div className={`hidden items-center justify-center md:flex md:w-1/3`}>
            <CallToActionIcon type={DeviceTypeEnum.Desktop} icon={icon} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
