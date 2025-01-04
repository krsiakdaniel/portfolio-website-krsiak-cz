import HeroHeading from '@/components/pages/home/hero/HeroHeading'
import HeroParagraph from '@/components/pages/home/hero/HeroParagraph'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Hero = (): JSX.Element => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
      </div>
    </div>
  )
}

export default Hero
