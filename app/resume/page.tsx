import HeroLink from '@/components/homepage/hero/HeroLink'
import PageContainer from '@/components/layout/PageContainer'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import ResumeInfo from '@/components/resume/ResumeInfo'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { EXTERNAL_URL } from '@/utils/constants/urls/externalUrls'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Resume | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Experienced React Developer proficient in JavaScript, React, TypeScript, Redux. Also skilled in QA Automation, leading teams, and managing localization projects.',
  keywords: [
    'Resume',
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
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
      <BreadCrumbs linkLevel1={PAGES_URL.aboutMe} textLevel1={TEXT.resume} />
      <div>
        <ResumeInfo />
        <div className="mt-8">
          <HeroLink
            href={EXTERNAL_URL.resume.resumeViewPDF}
            text={`Download - ${TEXT.resumePDF}`}
            className="bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 sm:mb-0"
            dataTestId={DATA_TEST_IDS.hero.linkResume}
          />
        </div>
        <ResumePreviewEmbed />
      </div>
      <PageNavigation
        linkPrevious={PAGES_URL.aboutMe}
        namePrevious={TEXT.aboutMe}
        dataTestIdPrevious={DATA_TEST_IDS.page.resume.previous}
        linkNext={PAGES_URL.work.mainUrl}
        nameNext={TEXT.workExperience}
        dataTestIdNext={DATA_TEST_IDS.page.resume.next}
      />
    </PageContainer>
  )
}

export default Resume
