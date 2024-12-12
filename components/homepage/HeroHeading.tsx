import { TEXT } from '@/localization/texts_en'

const HeroHeading = () => {
  return (
    <h1 data-testid="hero-heading" className="text-center text-5xl font-bold sm:text-6xl lg:text-7xl">
      {TEXT.nameDanielKrsiak}
      <br />
      <span className="mt-2 inline-block min-h-[96px] text-violet-600 sm:min-h-[60px] lg:min-h-[72px]">
        {TEXT.reactDeveloper}
      </span>
    </h1>
  )
}

export default HeroHeading
