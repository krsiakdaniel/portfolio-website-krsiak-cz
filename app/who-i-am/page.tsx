import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import SouthKorea from '@/components/pages/who-i-am/SouthKorea'
import WhoIAmIntroduction from '@/components/pages/who-i-am/WhoIAmIntroduction'
import WhoIAmTravelsList from '@/components/pages/who-i-am/WhoIAmTravelsList'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading from '@/components/shared/Heading'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'

import { metaDataWhoIam } from '@/lib/data/metadata/pages/metaDataWhoIAm'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ARIA_LABELS, ICON_EMOJI, SOUTH_KOREA, TEXT, WHO_I_AM } from '@/localization'

export const metadata: Metadata = {
  ...metaDataWhoIam,
}

const WhoIAm = () => {
  return (
    <PageContainer id={ID.whoIAm}>
      <BreadCrumbs
        level1Url={PAGES_URL.whoIAm}
        level1Icon={ICON_EMOJI.wavingHand}
        level1AriaLabel={ARIA_LABELS.emoji.wavingHand}
        level1Text={WHO_I_AM.whoIAm}
      />

      <div className="mt-10">
        <section>
          <Heading as="h1">
            <span role="img" aria-label={ARIA_LABELS.emoji.wavingHand} className="mr-4 select-none">
              {ICON_EMOJI.wavingHand}
            </span>
            <span>{WHO_I_AM.whoIAm}</span>
          </Heading>

          <WhoIAmIntroduction />
        </section>

        <section>
          <HeadingSection
            text={SOUTH_KOREA.headingTravel}
            icon={ICON_EMOJI.airplane}
            iconAria={ARIA_LABELS.emoji.airplane}
          />
          <Paragraph>
            <span>{WHO_I_AM.aboutMe}</span>
          </Paragraph>

          <WhoIAmTravelsList />
        </section>

        <SouthKorea />
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.personalProjects}
        iconPrevious={ICON_EMOJI.rocket}
        namePrevious={TEXT.personalProjects}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.whoIAm.previous}
        linkNext={PAGES_URL.testimonials}
        iconNext={ICON_EMOJI.speechBalloon}
        nameNext={TEXT.testimonials}
        dataTestIdNext={DATA_TEST_IDS.pageNavigation.whoIAm.next}
      />
    </PageContainer>
  )
}

export default WhoIAm
