import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { ProjectSection } from '@/components/projects/overview-page/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { projectsPersonalNext } from '@/data/projects/personal/projects-overview/personalNext'
import { projectsPersonalReact } from '@/data/projects/personal/projects-overview/personalReact'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Personal Projects | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Explore my projects created with Next.js and React. My portfolio, crypto app, e-commerce site, all showcasing coding skills and trends in web development.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    'Personal Projects',
    'Next.js',
    'React',
    'Web Development',
    'Portfolio',
    'Crypto Apps',
  ],
}

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID.projects.personal}>
      <BreadCrumbs level1Url={PAGES_URL.personal.mainUrl} level1Text={TEXT.personalProjects} />
      <ProjectsLayout
        heading={TEXT.personalProjects}
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
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
