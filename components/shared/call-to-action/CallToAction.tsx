import { FC } from 'react'

import CallToActionBubbles from '@/components/shared/call-to-action/CallToActionBubbles'
import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'
import CallToActionTexts from '@/components/shared/call-to-action/CallToActionTexts'
import LinkButton from '@/components/shared/LinkButton'
import Photo from '@/components/shared/Photo'

import { ICON_EMOJI } from '@/localization/english'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'
import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToAction: FC<CallToActionProps> = ({
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
  link,
  linkText,
  isLinkExternal = false,
  dataTestId,
  icon = ICON_EMOJI.atomSymbol,
  hasPhoto = false,
}): JSX.Element => {
  return (
    <div className="group relative mt-20">
      <CallToActionBubbles />

      <section className="relative rounded-lg border border-violet-300 bg-blue-50 p-8 transition duration-500 hover:border-violet-600 md:p-16">
        <div className="flex">
          <div className="pr-8 md:w-2/3">
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
            {hasPhoto ? (
              <Photo isPhotoSmall={true} isOpenToWork={IS_OPEN_TO_WORK} showCaption={false} />
            ) : (
              <CallToActionIcon type={DeviceTypeEnum.Desktop} icon={icon} />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
