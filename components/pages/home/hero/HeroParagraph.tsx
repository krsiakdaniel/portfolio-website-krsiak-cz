import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'

const HeroParagraph = (): JSX.Element => {
  return (
    <p data-testid={DATA_TEST_IDS.hero.paragraph} className="mt-4 text-center text-lg font-semibold text-neutral-600">
      {TEXT.heroText}
    </p>
  )
}

export default HeroParagraph
