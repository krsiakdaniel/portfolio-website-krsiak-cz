import NextPageNavigation from '@/components/NextPageNavigation'
import HeadingInfo from '@/components/aboutMe/HeadingInfo'
import JobsDescription from '@/components/aboutMe/JobsDescription'
import Photo from '@/components/aboutMe/Photo'
import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { ID, PAGES_URL } from '@/utils/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Daniel Kršiak - React Developer',
  description:
    'Experienced React Developer proficient in JavaScript, React, TypeScript, Redux. Also skilled in QA Automation, leading teams, and managing localization projects.',
  keywords: [
    'Daniel Kršiak',
    'React Developer',
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

// TODO: add E2E tests for inner pages navigation PREV / NEXT for all 'NextPageNavigation' components
const About = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs linkLevel1={PAGES_URL.aboutMe} textLevel1="About Me" />
      <div>
        <HeadingInfo />
        <div className="mt-16 flex flex-col-reverse justify-between md:flex-row md:space-x-10">
          <JobsDescription />
          <Photo isMediumWidth />
        </div>
      </div>
      <NextPageNavigation
        pageLinkPrevious="/"
        pageNamePrevious="Home"
        dataTestIDPrevious="page-navigation-previous-homepage"
        pageLinkNext="/resume"
        pageNameNext="Resume"
        dataTestIDNext="page-navigation-next-resume"
      />
    </PageContainer>
  )
}

export default About
