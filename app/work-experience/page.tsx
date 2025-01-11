import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsOverviewLayout from '@/components/layout/projects/ProjectsOverviewLayout'
import ExperienceCard from '@/components/pages/projects/other-experience/ExperienceCard'
import ProjectSection from '@/components/pages/projects/overview-page/ProjectSection'
import WorkExperienceIntroduction from '@/components/pages/work-experience/WorkExperienceIntroduction'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionResume from '@/components/shared/call-to-action/CallToActionResume'
import Heading4 from '@/components/shared/Heading4'

import { metaDataWorkExperience } from '@/lib/data/metadata/pages/projects/metaDataWorkExperience'
import { projectsWorkFrontEnd } from '@/lib/data/pages/projects/work/projects-overview/front-end/workFrontEnd'
import { projectsWorkLocalization } from '@/lib/data/pages/projects/work/projects-overview/localization/workLocalization'
import { projectsWorkQA } from '@/lib/data/pages/projects/work/projects-overview/quality-assurance/workQA'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'
import { projectsWorkWordPress } from '@/lib/data/pages/projects/work/projects-overview/wordpress/workWordpress'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { MONTHS, YEARS } from '@/lib/utils/constants/yearsExperience'

export const metadata = {
  ...metaDataWorkExperience,
}

const ProjectsWork: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.projects.work}>
      <BreadCrumbs level1Url={PAGES_URL.work.mainUrl} level1Text={TEXT.workExperience} />

      <ProjectsOverviewLayout heading={TEXT.workExperience} description={<WorkExperienceIntroduction />}>
        {/* REACT */}
        <ProjectSection sectionId={ID.section.react} sectionText="React" projectData={projectsWorkReact} />

        {/* CTA */}
        <CallToActionResume />

        {/* FRONT END */}
        <ProjectSection sectionId={ID.section.frontEnd} sectionText="Front End" projectData={projectsWorkFrontEnd} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <div className="mt-4">
          <ExperienceCard
            company="Freelance"
            role="Web Developer / Consultant"
            description={`${YEARS.consultantWebsites} years · part-time — I used to create websites for small companies.`}
          />
          <ExperienceCard
            company="Freelance"
            role="Web Developer"
            description={`${YEARS.webCoder} year — First web company job coding website layouts.`}
          />
        </div>

        {/* WORDPRESS */}
        <ProjectSection sectionId={ID.section.wordpress} sectionText="WordPress" projectData={projectsWorkWordPress} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <div className="mt-4">
          <ExperienceCard
            company="Freelance"
            role="WordPress Developer / Consultant"
            description={`${YEARS.consultantWordPress} years · part-time — I used to create websites for small companies.`}
          />
        </div>

        {/* QA */}
        <ProjectSection sectionId={ID.section.qa} sectionText="QA Automation & Testing" projectData={projectsWorkQA} />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <div className="mt-4">
          <ExperienceCard
            company="Smartsupp"
            role="QA Automation - Team Leader"
            description={`${MONTHS.qaTeamLeaderAtSmartsupp} months — Set up Cypress E2E testing for SaaS company.`}
          />
          <ExperienceCard
            company="RWS - Moravia IT"
            role="Localization - Tester"
            description={`${YEARS.localizationTester} years — Testing Windows 7 + Windows Store layouts.`}
          />
        </div>

        {/* LOCALIZATION */}
        <ProjectSection
          sectionId={ID.section.localization}
          sectionText="Localization"
          projectData={projectsWorkLocalization}
        />
        <Heading4>{TEXT.otherExperience}</Heading4>
        <div className="mt-4">
          <ExperienceCard
            company="Smartsupp"
            role="Localization - Manager"
            description={`${YEARS.localizationManager} years — Company website localization. 🇬🇧 🇨🇿 🇪🇸 🇫🇷 🇭🇺 🇩🇪 🇮🇹 🇳🇱 🇵🇱`}
          />
        </div>

        {/* CTA */}
        <CallToActionResume />
      </ProjectsOverviewLayout>

      <div className="mt-20">
        <PageNavigation
          linkPrevious={PAGES_URL.home}
          namePrevious={TEXT.home}
          dataTestIdPrevious={DATA_TEST_IDS.page.workExperience.previous}
          linkNext={PAGES_URL.resume}
          nameNext={TEXT.resume}
          dataTestIdNext={DATA_TEST_IDS.page.workExperience.next}
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsWork
