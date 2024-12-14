import PageNavigation from '@/components/PageNavigation'
import HeadingInfo from '@/components/aboutMe/HeadingInfo'
import JobsDescription from '@/components/aboutMe/JobsDescription'
import Photo from '@/components/aboutMe/Photo'
import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Experienced React Developer proficient in JavaScript, React, TypeScript, Redux. Also skilled in QA Automation, leading teams, and managing localization projects.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'QA Automation',
    'Team Leader',
    'Localization Manager',
    'JavaScript',
    'React',
    'TypeScript',
    'Redux',
    'Cypress',
    'Playwright',
    'Dashboard application',
    'Banking website',
    'SaaS company',
    'Microsoft Windows',
    'Localization',
  ],
}

// TODO: add E2E tests for inner pages navigation PREV / NEXT for all 'PageNavigation' components
const About = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs linkLevel1={PAGES_URL.aboutMe} textLevel1="About Me" />
      <div>
        <HeadingInfo />
        <div className="mt-16 flex flex-col-reverse justify-between lg:flex-row lg:space-x-10">
          <JobsDescription />
          <Photo />
        </div>
      </div>
      <PageNavigation
        pageLinkPrevious="/"
        pageNamePrevious="Home"
        dataTestIdPrevious={DATA_TEST_IDS.page.aboutMe.previous}
        pageLinkNext="/resume"
        pageNameNext="Resume"
        dataTestIdNext={DATA_TEST_IDS.page.aboutMe.next}
      />
    </PageContainer>
  )
}

export default About
