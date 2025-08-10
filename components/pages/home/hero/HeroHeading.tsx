import HeroSubHeading from '@/components/pages/home/hero/HeroSubHeading'
import Heading1 from '@/components/shared/Heading1'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

const HeroHeading = () => {
  return (
    <Heading1
      dataTestId={DATA_TEST_IDS.hero.heading}
      textColor="text-neutral-900"
      customCss="flex flex-col text-center"
    >
      {TEXT.nameDanielKrsiak}
      <HeroSubHeading />
    </Heading1>
  )
}
export default HeroHeading
