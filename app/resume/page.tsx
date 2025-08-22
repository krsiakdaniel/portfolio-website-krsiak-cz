import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import CareerPath from '@/components/pages/resume/CareerPath'
import ResumeContact from '@/components/pages/resume/ResumeContact'
import ResumeIntroduction from '@/components/pages/resume/ResumeIntroduction'
import ResumePreviewSection from '@/components/pages/resume/ResumePreviewSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionLinkedIn from '@/components/shared/call-to-action/cta-banners/CallToActionLinkedIn'
import Heading from '@/components/shared/Heading'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'

import { ARIA_LABELS, ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataResume,
}

const Resume = () => {
  return (
    <PageContainer id={ID.resume}>
      <BreadCrumbs
        level1Url={PAGES_URL.resume}
        level1Icon={ICON_EMOJI.memo}
        level1AriaLabel={ARIA_LABELS.emoji.memo}
        level1Text={TEXT.resume}
      />

      <div className="mt-10">
        <div>
          <Heading as="h1">
            <span role="img" aria-label={ARIA_LABELS.emoji.memo} className="mr-4 select-none">
              {ICON_EMOJI.memo}
            </span>
            <span>{TEXT.resume}</span>
          </Heading>
          <ResumeIntroduction />
        </div>

        <ResumePreviewSection />

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2">
            <CareerPath />
          </div>
          <div className="md:w-1/2">
            <ResumeContact />
          </div>
        </div>
        <CallToActionLinkedIn />
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.work.mainUrl}
        iconPrevious={ICON_EMOJI.manTechnologist.lightSkinTone}
        namePrevious={TEXT.workExperience}
        dataTestIdPrevious={DATA_TEST_IDS.pageNavigation.resume.previous}
        linkNext={PAGES_URL.personal.mainUrl}
        iconNext={ICON_EMOJI.rocket}
        nameNext={TEXT.personalProjects}
        dataTestIdNext={DATA_TEST_IDS.pageNavigation.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
