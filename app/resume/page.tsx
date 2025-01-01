import { Metadata } from 'next'

import PageNavigation from '@/components/layout/pages/navigation-previous-next/PageNavigation'
import PageContainer from '@/components/layout/pages/PageContainer'
import HeroLink from '@/components/pages/home/hero/HeroLink'
import ResumeInfo from '@/components/pages/resume/ResumeInfo'
import ResumePreviewEmbed from '@/components/pages/resume/ResumePreviewEmbed'
import BreadCrumbs from '@/components/shared/Breadcrumbs'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataResume,
}

const Resume = (): JSX.Element => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />

      <div className="mt-10">
        <ResumeInfo />

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">Download resume</div>
          <p className="mt-4 text-base font-normal text-neutral-500">
            Click the link below to download my resume. It includes detailed information about my professional
            experience.
          </p>
          <div className="mt-8">
            <HeroLink
              href={EXTERNAL_URL.resume.resumeViewPDF}
              text={`Download - ${TEXT.resumePDF}`}
              className="bg-red-700 text-white hover:bg-red-800 focus:ring-red-300"
              dataTestId={DATA_TEST_IDS.hero.linkResume}
            />
          </div>
        </div>

        <div>
          <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My resume</div>
          <p className="mt-4 text-base font-normal text-neutral-500">
            Below is an embedded preview of my resume. Read it to learn more about me.
          </p>
          <ResumePreviewEmbed />
        </div>
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.aboutMe}
        namePrevious={TEXT.aboutMe}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.testimonials}
        nameNext={TEXT.testimonials}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
