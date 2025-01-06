import { Metadata } from 'next'
import Image from 'next/image'
import { FC } from 'react'

import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'

import { metaDataStatusPage } from '@/lib/data/metadata/pages/metaDataStatusPage'
import { statusBadges } from '@/lib/data/pages/status-page'

import { TEXT } from '@/localization/english'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataStatusPage,
}

const StatusPage: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.statusPage}>
      <BreadCrumbs level1Url={PAGES_URL.statusPage} level1Text={TEXT.statusPage} />

      <div className="mt-10">
        <Heading1>{TEXT.statusPage}</Heading1>
        <p className="mt-4 text-lg text-neutral-600">
          Current statuses for key integrations, showcasing the health and performance of the project.
        </p>

        <div className="mt-8">
          {statusBadges.map((item) => (
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
