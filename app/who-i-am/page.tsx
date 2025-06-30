import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import SouthKorea from '@/components/pages/who-i-am/SouthKorea'
import WhoIAmIntroduction from '@/components/pages/who-i-am/WhoIAmIntroduction'
import WhoIAmTravelsList from '@/components/pages/who-i-am/WhoIAmTravelsList'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import HeadingSection from '@/components/shared/HeadingSection'
import Paragraph from '@/components/shared/Paragraph'

import { ARIA_LABELS, ICON_EMOJI, SOUTH_KOREA, TEXT, WHO_I_AM } from '@/localization/english'

import { metaDataWhoIam } from '@/lib/data/metadata/pages/metaDataWhoIAm'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataWhoIam,
}

const WhoIAm: FC = (): JSX.Element => {
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
          <Heading1>
            <span role="img" aria-label={ARIA_LABELS.emoji.wavingHand} className="mr-4 select-none">
              {ICON_EMOJI.wavingHand}
            </span>
            <span>{WHO_I_AM.whoIAm}</span>
          </Heading1>

          <WhoIAmIntroduction />
        </section>

        <section>
          <HeadingSection text={SOUTH_KOREA.headingTravel} icon={ICON_EMOJI.airplane} />
          <Paragraph>
            <span>{WHO_I_AM.aboutMe}</span>
          </Paragraph>

          <WhoIAmTravelsList />
        </section>

        {/* Quotes and photos of South Korea */}
        <SouthKorea />
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.home}
        iconPrevious={ICON_EMOJI.house}
        namePrevious={TEXT.home}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.whoIAm.previous}
        linkNext={PAGES_URL.work.mainUrl}
        iconNext={ICON_EMOJI.manTechnologist.lightSkinTone}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.pageNavigation.whoIAm.next}
      />
    </PageContainer>
  )
}

export default WhoIAm
