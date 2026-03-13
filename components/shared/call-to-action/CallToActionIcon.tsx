import EmojiAnimated from '@/components/shared/EmojiAnimated'

import { getEmojiEnum } from '@/lib/utils/helpers/getEmojiEnum'
import { DeviceTypeEnum, EmojiSizeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

import { SOCIAL_LINKS } from '@/localization'

const CallToActionIcon = ({ type, icon }: CallToActionIconProps) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const isIconString = typeof icon === 'string'
  const transitionIconCSS = 'transition-transform duration-500 group-hover:scale-105'

  return (
    <div
      className={`flex items-center justify-center select-none ${isMobile ? 'h-8 w-8 text-2xl md:hidden' : 'h-32 w-32 text-9xl'} ${transitionIconCSS}`}
    >
      {isIconString ? (
        icon
      ) : (
        <EmojiAnimated
          icon={getEmojiEnum(icon.src)}
          size={isMobile ? EmojiSizeEnum.SM : EmojiSizeEnum.LG}
          alt={SOCIAL_LINKS.gitHub}
          loading={ImageLoading.EAGER}
        />
      )}
    </div>
  )
}

export default CallToActionIcon
