import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import StatusPageIntroduction from '@/components/pages/status-page/StatusPageIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import ImageComponent from '@/components/shared/ImageComponent'

import { metaDataStatusPage } from '@/lib/data/metadata/pages/metaDataStatusPage'
import { statusBadges } from '@/lib/data/pages/status-page'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataStatusPage,
}

const StatusPage: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.statusPage}>
      <BreadCrumbs
        level1Url={PAGES_URL.statusPage}
        level1Icon={ICON_EMOJI.verticalTrafficLight}
        level1Text={TEXT.statusPage}
      />

      <div className="mt-10">
        <div>
          <Heading1>
            <span role="img" className="select-none">
              {ICON_EMOJI.verticalTrafficLight}
            </span>
            <span className="ml-4">{TEXT.statusPage}</span>
          </Heading1>
          <StatusPageIntroduction />
        </div>

        <div className="mt-8" data-testid={DATA_TEST_IDS.footer.statusBadges}>
          {(statusBadges ?? []).map((item) => (
            <ImageComponent
              key={item.id}
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              customCss="mt-2"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
