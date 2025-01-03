import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import HeadingInfo from '@/components/pages/about-me/HeadingInfo'
import JobsDescription from '@/components/pages/about-me/JobsDescription'
import Photo from '@/components/pages/about-me/Photo'
import BreadCrumbs from '@/components/shared/Breadcrumbs'

import { metaDataAboutMe } from '@/lib/data/metadata/pages/metaDataAboutMe'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataAboutMe,
}

const About = (): JSX.Element => {
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
