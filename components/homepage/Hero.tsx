import { ID } from '@/utils/constants/ids'
import HeroHeading from './HeroHeading'
import HeroMainLinks from './HeroMainLinks'
import HeroParagraph from './HeroParagraph'

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
