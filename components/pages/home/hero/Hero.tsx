import HeroHeading from '@/components/pages/home/hero/HeroHeading'
import HeroParagraph from '@/components/pages/home/hero/HeroParagraph'
import HeroSocialLinks from '@/components/pages/home/hero/HeroSocialLinks'

import { ID } from '@/lib/utils/constants/ids/elementIds'

const Hero = (): JSX.Element => {
  return (
    <div id={ID.hero}>
      <div className="flex flex-col items-center justify-center">
        <HeroHeading />
        <HeroParagraph />
      </div>
      <HeroSocialLinks />
    </div>
  )
}

export default Hero
