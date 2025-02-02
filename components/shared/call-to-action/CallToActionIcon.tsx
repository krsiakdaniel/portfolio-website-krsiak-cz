import { FC } from 'react'

import EmojiAnimated from '@/components/shared/EmojiAnimated'

import { SOCIAL_LINKS } from '@/localization/english'

import {
  DeviceTypeEnum,
  EmojiNameEnum,
  EmojiSizeEnum,
  ImageLoading,
} from '@/lib/utils/typeDefinitions/enums'

import { CallToActionIconProps } from '@/lib/utils/typeDefinitions/props/shared/call-to-action'

const CallToActionIcon: FC<CallToActionIconProps> = ({ type, icon }) => {
  const isMobile = type === DeviceTypeEnum.Mobile
  const isIconString = typeof icon === 'string'

  const getEmojiEnum = (importPath: string): EmojiNameEnum => {
    const match = importPath.match(/([^/]+?)-animated-\d+x\d+/)
    const name = match?.[1]

    if (!name) return EmojiNameEnum.ROCKET

    const enumKey = name.toUpperCase()
    return EmojiNameEnum[enumKey as keyof typeof EmojiNameEnum] || EmojiNameEnum.ROCKET
  }

  const transitionIconCSS = 'transition-transform duration-500 group-hover:scale-105'

  return (
    <div
      className={`flex select-none items-center justify-center ${isMobile ? 'h-8 w-8 text-2xl md:hidden' : 'h-32 w-32 text-9xl'} ${transitionIconCSS}`}
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
