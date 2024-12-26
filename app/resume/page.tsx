import { Metadata } from 'next'

import HeroLink from '@/components/homepage/hero/HeroLink'
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import ResumeInfo from '@/components/resume/ResumeInfo'
import ResumePreviewEmbed from '@/components/resume/ResumePreviewEmbed'
import BreadCrumbs from '@/components/shared/Breadcrumbs'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { metaDataResume } from '@/lib/utils/metadata/pages/metaDataResume'
import { TEXT } from '@/localization/english'

export const metadata: Metadata = {
  ...metaDataResume,
}

const Resume = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />
      <div>
        <ResumeInfo />

        <div>
          <div className="mb-4 mt-16 border-b pb-2 text-2xl font-bold uppercase">Download resume</div>
          <p className="mb-4 text-base font-normal text-neutral-500">
            Click the link below to download my resume. It includes detailed information about my professional
            experience.
          </p>
          <div className="mt-8">
            <HeroLink
              href={EXTERNAL_URL.resume.resumeViewPDF}
              text={`Download - ${TEXT.resumePDF}`}
              className="bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mb-0"
              dataTestId={DATA_TEST_IDS.hero.linkResume}
            />
          </div>
        </div>

        <div>
          <div className="mb-4 mt-16 border-b pb-2 text-2xl font-bold uppercase">My resume</div>
          <p className="mb-4 text-base font-normal text-neutral-500">
            Below is an embedded preview of my resume. Read it to learn more about me.
          </p>
          <ResumePreviewEmbed />
        </div>
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.aboutMe}
        namePrevious={TEXT.aboutMe}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
