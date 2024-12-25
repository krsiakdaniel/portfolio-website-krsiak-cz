import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import ExperienceCard from '@/components/projects/experience/ExperienceCard'
import { ProjectSection } from '@/components/projects/overview-page/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Heading4 from '@/components/shared/Heading4'
import Highlight from '@/components/shared/Highlight'

import { projectsWorkFrontEnd } from '@/data/projects/work/projects-overview/workFrontEnd'
import { projectsWorkLocalization } from '@/data/projects/work/projects-overview/workLocalization'
import { projectsWorkQA } from '@/data/projects/work/projects-overview/workQA'
import { projectsWorkReact } from '@/data/projects/work/projects-overview/workReact'
import { projectsWorkWordPress } from '@/data/projects/work/projects-overview/workWordpress'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  title: `Work Experience | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'React Developer with experience development, redesign, localization, QA automation, testing. Proficient in team leadership and collaboration with UX designers.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
    'Work Experience',
    'Front End Developer',
    'QA Automation',
    'Team Leader',
    'Localization Manager',
    'JavaScript',
    'React',
    'Redux',
    'Cypress',
    'WordPress',
    'SaaS Company',
    'Smartsupp',
    'Komerční banka',
    'Groupon',
    'RWS - Moravia IT',
  ],
}

const ProjectsWork = () => {
  return (
    <PageContainer id={ID.projects.work}>
      <BreadCrumbs level1Url={PAGES_URL.work.mainUrl} level1Text={TEXT.workExperience} />

      <ProjectsLayout
        heading={TEXT.workExperience}
        description={
          <p className="mt-4 text-lg text-neutral-600">
            I developed <Highlight text="new features" />, led entire website redesigns, implemented{' '}
            <Highlight text="responsive designs" />, modernized legacy codebase, and managed localization,{' '}
            <Highlight text="QA automation" />, and testing, including serving as a <Highlight text="team leader" />.
          </p>
        }
      >
        <ProjectSection sectionId={ID.section.react} sectionText="React" projectData={projectsWorkReact} />

        <ProjectSection sectionId={ID.section.frontEnd} sectionText="Front End" projectData={projectsWorkFrontEnd} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <ExperienceCard
          company="Freelance"
          role="Web Developer / Consultant"
          description="In the past I was creating  websites for clients."
          isPartTime
        />
        <ExperienceCard
          company="Freelance"
          role="Web Developer"
          description="First time web company job was 1 year coding website layouts."
        />

        <ProjectSection sectionId={ID.section.wordpress} sectionText="WordPress" projectData={projectsWorkWordPress} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <ExperienceCard
          company="Freelance"
          role="WordPress Consultant"
          description="For 5 years I used to create websites for clients and small companies."
          isPartTime
        />

        <ProjectSection sectionId={ID.section.qa} sectionText="QA Automation & Testing" projectData={projectsWorkQA} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <ExperienceCard
          company="Smartsupp"
          role="QA Automation - Team Leader"
          description="I set up Cypress E2E testing for the entire company application. I also wrote E2E tests in JavaScript and TypeScript. Mentoring juniors QA."
        />
        <ExperienceCard
          company="RWS - Moravia IT"
          role="Localization - Tester"
          description="Making sure translations fit UI layout on Windows 7 + Windows Store."
        />

        <ProjectSection
          sectionId={ID.section.localization}
          sectionText="Localization"
          projectData={projectsWorkLocalization}
        />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <ExperienceCard
          company="Smartsupp"
          role="Localization - Manager"
          description="Responsible for translation of the company website and application into 9 languages. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱"
        />
      </ProjectsLayout>

      <div className="mt-20">
        <PageNavigation
          linkPrevious={PAGES_URL.resume}
          namePrevious={TEXT.resume}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.overview.previous}
          linkNext={PAGES_URL.personal.mainUrl}
          nameNext={TEXT.personalProjects}
          dataTestIdNext={DATA_TEST_IDS.projects.work.overview.next}
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsWork
