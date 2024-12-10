import HeroLink from '@/components/homepage/HeroLink'
import PageContainer from '@/components/layout/PageContainer'
import NextPageNavigation from '@/components/NextPageNavigation'
import ResumeInfo from '@/components/resume/ResumeInfo'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { EXTERNAL_URL, ID } from '@/utils/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | Daniel Kršiak - React Developer',
  description:
    'Experienced React Developer proficient in JavaScript, React, TypeScript, Redux. Also skilled in QA Automation, leading teams, and managing localization projects.',
  keywords: [
    'Resume',
    'Daniel Kršiak',
    'React Developer',
    'QA Automation Specialist',
    'Team Leader',
    'Localization Manager',
    'JavaScript',
    'React',
    'TypeScript',
    'Redux',
    'Cypress',
    'Playwright',
    'Dashboard Application Development',
    'Banking Website Development',
    'SaaS Company',
    'Microsoft Windows',
    'Localization Expert',
    'Front-End Development',
    'Software Testing & Automation',
    'Agile Methodologies',
    'UI/UX Development',
    'Cross-functional Collaboration',
    'Continuous Integration / Continuous Delivery (CI/CD)',
    'Version Control (Git)',
    'Test-Driven Development (TDD)',
    'Unit & Integration Testing',
  ],
}

const ResumePreviewEmbed = () => {
  return (
    <div className="mt-16">
      <iframe
        src={EXTERNAL_URL.resume.resumeEmbedPreviewPDF}
        width="100%"
        height="1400"
        allow="autoplay"
        className="border bg-black p-2"
      ></iframe>
    </div>
  )
}

const Resume = () => {
  return (
    <PageContainer id={ID.about}>
      <BreadCrumbs linkLevel1="/about-me" textLevel1="About Me" />
      <div>
        <ResumeInfo />
        <div className="mt-8">
          <HeroLink
            href={EXTERNAL_URL.resumeViewPDF}
            text="Download - Resume in PDF"
            className="bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mb-0"
            testId="hero-link-resume"
          />
        </div>
        <ResumePreviewEmbed />
      </div>
      <NextPageNavigation
        pageLinkPrevious="/about-me"
        pageNamePrevious="About Me"
        dataTestIDPrevious="page-navigation-previous-about-me"
        pageLinkNext="/work-experience"
        pageNameNext="Work Experience"
        dataTestIDNext="page-navigation-next-work-experience"
      />
    </PageContainer>
  )
}

export default Resume
