import { type CallToActionProps } from '@/components/shared/call-to-action/CallToAction.types'
import CallToActionBubbles from '@/components/shared/call-to-action/CallToActionBubbles'
import CallToActionIcon from '@/components/shared/call-to-action/CallToActionIcon'
import CallToActionTexts from '@/components/shared/call-to-action/CallToActionTexts'
import Photo from '@/components/shared/call-to-action/Photo'
import LinkButton from '@/components/shared/link-button/LinkButton'

import { IS_OPEN_TO_WORK } from '@/lib/utils/constants/shared/openToWork'

import { ARIA_LABELS } from '@/localization'

import { DeviceTypeEnum } from '@/lib/types/enums'

const CallToAction = ({
  highlight,
  heading,
  textMobileAndDesktop,
  textDesktop,
  link,
  linkText,
  isLinkExternal = false,
  dataTestId,
  icon,
  iconAlt,
  hasPhoto = false,
}: CallToActionProps) => {
  return (
    <div className="group relative my-40">
      <CallToActionBubbles />

      <section
        className="relative rounded-lg border border-violet-300 bg-blue-50 p-8 transition duration-300 hover:border-violet-500 md:p-16"
        aria-label={ARIA_LABELS.callToAction}
      >
        <div className="flex">
          <div className="pr-0 md:w-2/3 md:pr-8">
            <CallToActionTexts
              icon={icon}
              iconAlt={iconAlt}
              highlight={highlight}
              heading={heading}
              textMobileAndDesktop={textMobileAndDesktop}
              textDesktop={textDesktop}
            />
            <div className="mt-8 flex max-w-[248px]">
              <LinkButton
                href={link}
                linkText={linkText}
                isLinkExternal={isLinkExternal}
                dataTestId={dataTestId}
              />
            </div>
          </div>

          <div className="hidden items-center justify-center md:flex md:w-1/3">
            {hasPhoto ? (
              <Photo isPhotoSmall={true} isOpenToWork={IS_OPEN_TO_WORK} />
            ) : (
              <CallToActionIcon type={DeviceTypeEnum.Desktop} icon={icon} iconAlt={iconAlt} />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
