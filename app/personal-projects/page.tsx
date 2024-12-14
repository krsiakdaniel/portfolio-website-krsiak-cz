import NextPageNavigation from '@/components/NextPageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import { ProjectSection } from '@/components/projects/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import { projectsPersonalNext, projectsPersonalReact } from '@/data/projects/personal/projectsOverview'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL } from '@/utils/constants'
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
      <BreadCrumbs linkLevel1={PAGES_URL.personal.mainUrl} textLevel1="Personal Projects" />
      <ProjectsLayout
        heading="🚀 Personal Projects"
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
      >
        <ProjectSection sectionId={ID.section.next} sectionText="Next" projectData={projectsPersonalNext} />
        <ProjectSection sectionId={ID.section.react} sectionText="React" projectData={projectsPersonalReact} />
      </ProjectsLayout>
      <div className="mt-20">
        <NextPageNavigation
          pageLinkPrevious="/work-experience"
          pageNamePrevious="Work Experience"
          dataTestIdPrevious="page-navigation-previous-work-experience"
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
