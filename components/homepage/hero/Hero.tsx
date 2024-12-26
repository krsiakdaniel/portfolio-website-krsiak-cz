import HeroHeading from '@/components/homepage/hero/HeroHeading'
import HeroMainLinks from '@/components/homepage/hero/HeroMainLinks'
import HeroParagraph from '@/components/homepage/hero/HeroParagraph'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Hero = () => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
      </div>
      <HeroMainLinks />
    </div>
  )
}

export default Hero
