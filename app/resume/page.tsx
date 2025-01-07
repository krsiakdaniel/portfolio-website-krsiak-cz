import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import CareerPath from '@/components/pages/resume/CareerPath'
import ResumeIntroduction from '@/components/pages/resume/ResumeIntroduction'
import ResumePlainText from '@/components/pages/resume/ResumePlainText'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResumeDownload from '@/components/shared/call-to-action/CallToActionResumeDownload'
import Heading1 from '@/components/shared/Heading1'
import Heading2 from '@/components/shared/Heading2'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

const Resume: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.resume}>
      <BreadCrumbs level1Url={PAGES_URL.resume} level1Text={TEXT.resume} />

      <div className="mt-10">
        <Heading1>{TEXT.resume}</Heading1>
        <ResumeIntroduction />
        <CallToActionResumeDownload />

        <section className="mt-16 w-full bg-white text-left dark:bg-gray-900">
          <div>
            <Heading2 textColor="text-neutral-900">Transforming Companies with Automation</Heading2>
          </div>
          <div className="w-full py-0 text-center lg:mt-4">
            <dl className="grid w-full gap-4 text-gray-900 dark:text-white lg:grid-cols-3">
              <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <dt className="mb-2 whitespace-nowrap text-3xl font-extrabold md:text-4xl">Companies 4+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">From startup to corporate</dd>
              </div>
              <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <dt className="mb-2 whitespace-nowrap text-3xl font-extrabold md:text-4xl">Features 500+</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">Implemented successfully</dd>
              </div>
              <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <dt className="mb-2 whitespace-nowrap text-3xl font-extrabold md:text-4xl">Automation ∞</dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">Streamlined testing and CI/CD</dd>
              </div>
            </dl>
          </div>
        </section>

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
