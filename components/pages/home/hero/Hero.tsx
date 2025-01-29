import { FC } from 'react'

import HeroHeading from '@/components/pages/home/hero/HeroHeading'
import HeroParagraph from '@/components/pages/home/hero/HeroParagraph'
import EmojiAnimated from '@/components/shared/EmojiAnimated'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Hero: FC = (): JSX.Element => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
        <EmojiAnimated />
      </div>
    </div>
  )
}

export default Hero
