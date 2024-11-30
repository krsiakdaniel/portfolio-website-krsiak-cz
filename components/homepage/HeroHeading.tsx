import TypeAnimationText from '@/components/homepage/TypeAnimationText'

const HeroHeading = () => {
  return (
    <h1 data-testid="hero-heading" className="text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
      Daniel Kršiak
      <br />
      <TypeAnimationText />
    </h1>
  )
}

export default HeroHeading
