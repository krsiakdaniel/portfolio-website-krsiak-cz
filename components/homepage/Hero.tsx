import { ID } from '@/utils/constants'
import HeroContactLinks from './HeroContactLinks'
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
      <HeroContactLinks />
    </div>
  )
}

export default Hero
