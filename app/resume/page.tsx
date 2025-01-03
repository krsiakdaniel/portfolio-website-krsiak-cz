import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ResumeInfo from '@/components/pages/resume/ResumeInfo'
import ResumePreviewEmbed from '@/components/pages/resume/ResumePreviewEmbed'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import SocialLink from '@/components/shared/SocialLink'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { EXTERNAL_URL } from '@/lib/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { LinkColors } from '@/lib/utils/interfaces/enums'

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
            <SocialLink
              href={EXTERNAL_URL.resume.resumeViewPDF}
              text={TEXT.resumePDF}
              linkColor={LinkColors.Red}
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
