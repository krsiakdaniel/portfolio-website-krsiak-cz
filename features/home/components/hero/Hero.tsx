import EmojiAnimated from '@/components/shared/emoji-animated/EmojiAnimated'

import { ID } from '@/lib/utils/constants/ids/elementIds'

import { IMAGE_ALT } from '@/localization'

import { EmojiNameEnum, EmojiSizeEnum, ImageLoadingEnum } from '@/lib/types/enums'

import HeroHeading from './HeroHeading'
import HeroParagraph from './HeroParagraph'

const Hero = () => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
        <EmojiAnimated
          icon={EmojiNameEnum.SUNGLASSES}
          size={EmojiSizeEnum.LG}
          alt={IMAGE_ALT.welcome}
          loading={ImageLoadingEnum.EAGER}
          priority={true}
          className="mt-8"
        />
      </div>
    </div>
  )
}

export default Hero
