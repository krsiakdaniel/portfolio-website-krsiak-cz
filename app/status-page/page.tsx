import Image from 'next/image'
import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import Paragraph from '@/components/shared/Paragraph'

import { metaDataStatusPage } from '@/lib/data/metadata/pages/metaDataStatusPage'
import { statusBadges } from '@/lib/data/pages/status-page'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataStatusPage,
}

const StatusPage: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.statusPage}>
      <BreadCrumbs level1Url={PAGES_URL.statusPage} level1Text={TEXT.statusPage} />

      <div className="mt-10">
        <Heading1>{TEXT.statusPage}</Heading1>
        <Paragraph>
          Current statuses for key integrations, showcasing the health and performance of the project.
        </Paragraph>

        <div className="mt-8" data-testid={DATA_TEST_IDS.footer.statusBadges}>
          {(statusBadges ?? []).map((item) => (
            <Image
              key={item.id}
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              className="mt-2 first:mt-0"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
