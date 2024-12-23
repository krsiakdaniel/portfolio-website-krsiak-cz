import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading1 from '@/components/shared/Heading1'
import { statusBadges } from '@/data/statusPage'
import { TEXT } from '@/localization/english'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: `Status page | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Explore status page showcasing project badges for Jest Tests, Playwright Tests, CodeQL, Code Quality, Dependabot, and Netlify.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Status page',
    'Project badges',
    'Jest Tests',
    'Playwright Tests',
    'CodeQL',
    'Code Quality',
    'Dependabot',
    'Netlify',
  ],
}

const StatusPage = () => {
  return (
    <PageContainer id={ID.statusPage}>
      <BreadCrumbs level1Url={PAGES_URL.statusPage} level1Text={TEXT.statusPage} />
      <div>
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
              className="mb-2 last:mb-0"
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export default StatusPage
