import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import CareerPath from '@/components/pages/resume/CareerPath'
import ResumeIntroduction from '@/components/pages/resume/ResumeIntroduction'
import ResumePlainText from '@/components/pages/resume/ResumePlainText'
import SocialProof from '@/components/pages/resume/SocialProof'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResumeDownload from '@/components/shared/call-to-action/CallToActionResumeDownload'
import Heading1 from '@/components/shared/Heading1'

import { metaDataResume } from '@/lib/data/metadata/pages/metaDataResume'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataResume,
}

const Resume: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.resume}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />

      <div className="mt-10">
        <Heading1>{TEXT.resume}</Heading1>
        <ResumeIntroduction />
        <CallToActionResumeDownload />
        <SocialProof />
        <CareerPath />
        <ResumePlainText />
      </div>

      <PageNavigation
        linkPrevious={PAGES_URL.work.mainUrl}
        namePrevious={TEXT.workExperience}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.personal.mainUrl}
        nameNext={TEXT.personalProjects}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
