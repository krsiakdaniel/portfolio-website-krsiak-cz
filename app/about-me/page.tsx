import { Metadata } from 'next'

import HeadingInfo from '@/components/about-me/HeadingInfo'
import JobsDescription from '@/components/about-me/JobsDescription'
import Photo from '@/components/about-me/Photo'
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import BreadCrumbs from '@/components/shared/Breadcrumbs'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { metaDataAboutMe } from '@/lib/utils/metadata/pages/metaDataAboutMe'
import { TEXT } from '@/localization/english'

export const metadata: Metadata = {
  ...metaDataAboutMe,
}

// TODO: add E2E tests for inner pages navigation PREV / NEXT for all 'PageNavigation' components
const About = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs level1Url={PAGES_URL.aboutMe} level1Text={TEXT.aboutMe} />

      <div className="mt-10">
        <HeadingInfo />
        <div className="mt-16 border-b pb-2 text-2xl font-bold uppercase">My Career Path</div>
        <div className="flex flex-col-reverse justify-between lg:mt-8 lg:flex-row lg:space-x-10">
          <JobsDescription />
          <Photo />
        </div>
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.home}
        namePrevious={TEXT.home}
        dataTestIdPrevious={DATA_TEST_IDS.page.aboutMe.previous}
        linkNext={PAGES_URL.resume}
        nameNext={TEXT.resume}
        dataTestIdNext={DATA_TEST_IDS.page.aboutMe.next}
      />
    </PageContainer>
  )
}

export default About
