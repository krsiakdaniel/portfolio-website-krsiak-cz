import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import StatusIntroduction from '@/components/pages/status/StatusIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import ExternalLink from '@/components/shared/ExternalLink'
import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'
import ImageComponent from '@/components/shared/ImageComponent'
import Paragraph from '@/components/shared/Paragraph'

import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'

import { metaDataStatus } from '@/lib/data/metadata/pages/metaDataStatus'
import { statusBadges } from '@/lib/data/pages/status'

import { DAISY_IU, ICON_EMOJI, STATUS, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import EmojiAnimated, { EmojiSizeEnum, EmojiTypeEnum } from '@/components/shared/EmojiAnimated'

export const metadata = {
  ...metaDataStatus,
}

const Status: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.status}>
      <BreadCrumbs level1Url={PAGES_URL.status} level1Icon={ICON_EMOJI.verticalTrafficLight} level1Text={STATUS.text} />

      <div className="mt-10">
        <div>
          <Heading1>
            <span role="img" className="mr-4 select-none">
              {ICON_EMOJI.verticalTrafficLight}
            </span>
            <span>{STATUS.text}</span>
          </Heading1>
          <StatusIntroduction />
        </div>

        <Heading2 customCss="mt-8">CI & CD</Heading2>
        <Paragraph>Current status of integration and deployment pipelines.</Paragraph>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-2">
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
            <EmojiAnimated
              type={EmojiTypeEnum.ROBOT}
              size={EmojiSizeEnum.MD}
              alt={DAISY_IU.daisyIsAwesome}
              loading="eager"
              className="mt-8"
            />
          </div>
        </div>

        <div className="mt-8">
          <Heading2 customCss="mt-8">Uptime Monitoring</Heading2>
          <Paragraph>
            Status page monitoring this website uptime.
            <span className="align-self flex">
              <ExternalLink
                href={EXTERNAL_URL.uptimeMonitorStatus}
                text={STATUS.linkText}
                title={TEXT.opensInNewTab}
                dataTestId={DATA_TEST_IDS.externalLinks.uptimeMonitorStatusExternal}
              />
            </span>
          </Paragraph>
        </div>
      </div>
    </PageContainer>
  )
}

export default Status
