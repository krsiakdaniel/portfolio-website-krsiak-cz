import EmojiAnimated from '@/components/shared/emoji-animated/EmojiAnimated'

import { getEmojiEnum } from '@/lib/utils/helpers/getEmojiEnum'

import { DeviceTypeEnum, EmojiSizeEnum, ImageLoadingEnum } from '@/lib/types/enums'
import { SOCIAL_LINKS } from '@/localization'

import { CallToActionIconProps } from './CallToActionIcon.types'

const CallToActionIcon = ({ type, icon }: CallToActionIconProps) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const size = isMobile ? EmojiSizeEnum.SM : EmojiSizeEnum.LG
  const isIconString = typeof icon === 'string'
  const mobileCss = isMobile ? 'h-8 w-8 text-2xl md:hidden' : 'h-32 w-32 text-9xl'
  const transitionIconCss = 'transition-transform duration-500 group-hover:scale-105'

  return (
    <div
      className={`flex items-center justify-center select-none ${mobileCss} ${transitionIconCss}`}
    >
      {isIconString ? (
        icon
      ) : (
        <EmojiAnimated
          icon={getEmojiEnum(icon.src)}
          size={size}
          alt={SOCIAL_LINKS.gitHub}
          loading={ImageLoadingEnum.EAGER}
        />
      )}
    </div>
  )
}

export default CallToActionIcon
