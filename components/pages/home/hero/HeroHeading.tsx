import HeroSubHeading from '@/components/pages/home/hero/HeroSubHeading'
import Heading from '@/components/shared/Heading'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { TEXT } from '@/localization'

const HeroHeading = () => {
  return (
    <Heading
      as="h1"
      dataTestId={DATA_TEST_IDS.hero.heading}
      textColor="text-neutral-900"
      customCss="flex flex-col text-center"
    >
      {TEXT.nameDanielKrsiak}
      <HeroSubHeading />
    </Heading>
  )
}
export default HeroHeading
