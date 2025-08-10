import HeroHeading from '@/components/pages/home/hero/HeroHeading'
import HeroParagraph from '@/components/pages/home/hero/HeroParagraph'
import EmojiAnimated from '@/components/shared/EmojiAnimated'

import { IMAGE_ALT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EmojiNameEnum, EmojiSizeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'

const Hero = () => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
        <EmojiAnimated
          icon={EmojiNameEnum.SUNGLASSES}
          size={EmojiSizeEnum.LG}
          alt={IMAGE_ALT.altWelcome}
          loading={ImageLoading.EAGER}
          className="mt-8"
        />
      </div>
    </div>
  )
}

export default Hero
