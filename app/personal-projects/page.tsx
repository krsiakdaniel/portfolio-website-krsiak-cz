import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsOverviewLayout from '@/components/layout/projects/ProjectsOverviewLayout'
import PersonalProjectsIntroduction from '@/components/pages/personal-projects/PersonalProjectsIntroduction'
import ProjectSection from '@/components/pages/projects/overview-page/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import CallToActionGitHub from '@/components/shared/call-to-action/CallToActionGitHub'

import { metaDataProjectsOverviewPersonal } from '@/lib/data/metadata/pages/projects/metaDataProjectsOverviewPersonal'
import { projectsPersonalNext } from '@/lib/data/pages/projects/personal/projects-overview/next/personalNext'
import { projectsPersonalReact } from '@/lib/data/pages/projects/personal/projects-overview/react/personalReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata = {
  ...metaDataProjectsOverviewPersonal,
}

const ProjectsPersonal: FC = (): JSX.Element => {
  return (
    <PageContainer id={ID.projects.personal}>
      <BreadCrumbs level1Url={PAGES_URL.personal.mainUrl} level1Text={TEXT.personalProjects} />

      <ProjectsOverviewLayout heading={TEXT.personalProjects} description={<PersonalProjectsIntroduction />}>
        <CallToActionGitHub />

        {/* NEXT */}
        <ProjectSection sectionId={ID.section.next} sectionText={TEXT.next} projectData={projectsPersonalNext} />

        {/* REACT */}
        <ProjectSection sectionId={ID.section.react} sectionText={TEXT.react} projectData={projectsPersonalReact} />
      </ProjectsOverviewLayout>

      <div className="mt-20">
        <PageNavigation
          linkPrevious={PAGES_URL.resume}
          namePrevious={TEXT.resume}
          dataTestIdPrevious={DATA_TEST_IDS.page.personalProjects.previous}
          linkNext={PAGES_URL.testimonials}
          nameNext={TEXT.testimonials}
          dataTestIdNext={DATA_TEST_IDS.page.personalProjects.next}
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
