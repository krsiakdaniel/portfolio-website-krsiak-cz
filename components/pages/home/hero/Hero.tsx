import { FC } from 'react'

import HeroHeading from '@/components/pages/home/hero/HeroHeading'
import HeroParagraph from '@/components/pages/home/hero/HeroParagraph'
import EmojiAnimated from '@/components/shared/EmojiAnimated'

import { IMAGE_ALT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EmojiNameEnum, EmojiSizeEnum, ImageLoading } from '@/lib/utils/typeDefinitions/enums'

const Hero: FC = (): JSX.Element => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
        <EmojiAnimated
          type={EmojiNameEnum.SUNGLASSES}
          size={EmojiSizeEnum.LG}
          alt={IMAGE_ALT.welcome}
          loading={ImageLoading.EAGER}
          className="mt-8"
        />
      </div>
    </div>
  )
}

export default Hero
