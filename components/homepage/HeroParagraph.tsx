import { TEXT } from '@/localization/texts_en'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'

const HeroParagraph = () => {
  return (
    <p
      data-testid={DATA_TEST_IDS.hero.paragraph}
      className="mb-3 mt-4 text-center text-lg font-semibold text-neutral-600"
    >
      {TEXT.heroText}
    </p>
  )
}

export default HeroParagraph
