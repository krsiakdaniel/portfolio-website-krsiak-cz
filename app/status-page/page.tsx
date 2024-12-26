import { Metadata } from 'next'
import Image from 'next/image'

import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'

import { statusBadges } from '@/lib/data/statusPage'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { metaDataStatusPage } from '@/lib/utils/metadata/pages/metaDataStatusPage'
import { TEXT } from '@/localization/english'

export const metadata: Metadata = {
  ...metaDataStatusPage,
}

const StatusPage = () => {
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
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="eager"
              className="mt-2 first:mt-0"
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
