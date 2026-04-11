import { type Metadata } from 'next'

import PageContainer from '@/components/layout/page-container/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import BreadCrumbs from '@/components/shared/breadcrumbs/Breadcrumbs'
import Heading from '@/components/shared/heading/Heading'
import HeadingSection from '@/components/shared/heading/HeadingSection'
import Paragraph from '@/components/shared/paragraph/Paragraph'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import SouthKorea from '@/features/who-i-am/components/south-korea/SouthKorea'
import WhoIAmIntroduction from '@/features/who-i-am/components/who-i-am-introduction/WhoIAmIntroduction'
import WhoIAmTravelsList from '@/features/who-i-am/components/who-i-am-travels-list/WhoIAmTravelsList'
import { SOUTH_KOREA, WHO_I_AM } from '@/features/who-i-am/localization'
import { metaDataWhoIam } from '@/features/who-i-am/metadata'
import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization'

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
        <section aria-label={WHO_I_AM.whoIAm}>
          <Heading as="h1">
            <span role="img" aria-label={ARIA_LABELS.emoji.wavingHand} className="mr-4 select-none">
              {ICON_EMOJI.wavingHand}
            </span>
            <span>{WHO_I_AM.whoIAm}</span>
          </Heading>

          <WhoIAmIntroduction />
        </section>

        <section aria-label={SOUTH_KOREA.headingTravel}>
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
