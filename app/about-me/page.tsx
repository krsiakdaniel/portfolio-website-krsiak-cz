import NextPageNavigation from '@/components/NextPageNavigation'
import HeadingInfo from '@/components/aboutMe/HeadingInfo'
import JobsDescription from '@/components/aboutMe/JobsDescription'
import Photo from '@/components/aboutMe/Photo'
import PageContainer from '@/components/layout/PageContainer'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { ID } from '@/utils/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Daniel Krsiak - React Developer',
  description:
    'Experienced React Developer proficient in JavaScript, React, TypeScript, Redux. Also skilled in QA Automation, leading teams, and managing localization projects.',
  keywords: [
    'Daniel Krsiak',
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
      <BreadCrumbs linkLevel1="/about-me" textLevel1="About Me" />
      <div className="mb-20">
        <HeadingInfo />
        <div className="mt-16 flex flex-col-reverse justify-between md:flex-row md:space-x-10">
          <JobsDescription />
          <Photo />
        </div>
      </div>
      <NextPageNavigation
        pageLinkPrevious="/"
        pageNamePrevious="Home"
        dataTestIDPrevious="page-navigation-previous-homepage"
        pageLinkNext="/work-experience"
        pageNameNext="Work Experience"
        dataTestIDNext="page-navigation-next-work-experience"
      />
    </PageContainer>
  )
}

export default About
