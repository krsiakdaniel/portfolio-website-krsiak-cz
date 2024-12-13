import { TEXT } from '@/localization/texts_en'

const HeroParagraph = () => {
  return (
    <p data-testid="hero-paragraph-1" className="mb-3 mt-4 text-center text-lg font-semibold text-neutral-600">
      {TEXT.heroText}
    </p>
  )
}

export default HeroParagraph
