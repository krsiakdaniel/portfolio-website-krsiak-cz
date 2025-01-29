import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import StatusPageIntroduction from '@/components/pages/status-page/StatusPageIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import ImageComponent from '@/components/shared/ImageComponent'

import { metaDataStatusPage } from '@/lib/data/metadata/pages/metaDataStatusPage'
import { statusBadges } from '@/lib/data/pages/status-page'

import { ICON_EMOJI, IMAGE_ALT, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import smilingFaceWithSunglasses from '@/public/images/webp/emoji-animated/smiling-face-with-sunglasses-animated.webp'

export const metadata = {
  ...metaDataStatusPage,
}

const DAISY_UI_TEXT = 'daisyUI is awesome!'

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
            <span role="img" className="mr-4 select-none">
              {ICON_EMOJI.verticalTrafficLight}
            </span>
            <span>{TEXT.statusPage}</span>
          </Heading1>
          <StatusPageIntroduction />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
          <div data-testid={DATA_TEST_IDS.footer.statusBadges}>
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
          <div className="mt-16 flex md:mt-0 md:items-center md:justify-center">
            <ImageComponent
              src={smilingFaceWithSunglasses}
              width={80}
              height={80}
              alt={IMAGE_ALT.daisyUI}
              loading="eager"
              dataTooltipContent={DAISY_UI_TEXT}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
