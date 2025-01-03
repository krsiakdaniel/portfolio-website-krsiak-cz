import { Metadata } from 'next'

import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import ProjectSection from '@/components/projects/overview-page/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import Highlight from '@/components/shared/Highlight'

import { metaDataProjectsOverviewPersonal } from '@/lib/data/metadata/pages/metaDataProjectsOverviewPersonal'
import { projectsPersonalNext } from '@/lib/data/projects/personal/projects-overview/personalNext'
import { projectsPersonalReact } from '@/lib/data/projects/personal/projects-overview/personalReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

export const metadata: Metadata = {
  ...metaDataProjectsOverviewPersonal,
}

const ProjectsPersonal = (): JSX.Element => {
  return (
    <PageContainer id={ID.projects.personal}>
      <BreadCrumbs level1Url={PAGES_URL.personal.mainUrl} level1Text={TEXT.personalProjects} />

      <ProjectsLayout
        heading={TEXT.personalProjects}
        description={
          <p className="mt-4 text-lg text-neutral-600">
            I enjoy learning <Highlight text="new technologies" /> and creating <Highlight text="personal projects" />{' '}
            where I can apply my knowledge and stay updated with the <Highlight text="latest trends" />.
          </p>
        }
      >
        <ProjectSection sectionId={ID.section.next} sectionText={TEXT.next} projectData={projectsPersonalNext} />

        <ProjectSection sectionId={ID.section.react} sectionText={TEXT.react} projectData={projectsPersonalReact} />
      </ProjectsLayout>

      <div className="mt-20">
        <PageNavigation
          linkPrevious={PAGES_URL.work.mainUrl}
          namePrevious={TEXT.workExperience}
          dataTestIdPrevious={DATA_TEST_IDS.projects.personal.overview.previous}
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
