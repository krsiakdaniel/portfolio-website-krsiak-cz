import { FC } from 'react'

import { SOCIAL_LINKS } from '@/localization/english'

import EmojiAnimated, { EmojiSizeEnum, EmojiTypeEnum } from '@/components/shared/EmojiAnimated'
import { DeviceTypeEnum } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionIcon: FC<CallToActionIconProps> = ({ type, icon }) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const isIconString = typeof icon === 'string'

  const transitionIconCSS = 'transition-transform duration-500 group-hover:scale-105'

  return (
    <div className={`select-none ${isMobile ? 'text-2xl md:hidden' : 'text-9xl'} ${transitionIconCSS}`}>
      {isIconString ? (
        icon
      ) : (
        <EmojiAnimated
          type={EmojiTypeEnum.ROCKET}
          size={EmojiSizeEnum.MD}
          alt={SOCIAL_LINKS.gitHub}
          loading="eager"
          className="mt-8"
        />
      )}
    </div>
  )
}

export default CallToActionIcon
