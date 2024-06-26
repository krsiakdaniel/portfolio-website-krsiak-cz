import NextPageNavigation from '@/components/NextPageNavigation'
import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import { ProjectSection } from '@/components/projects/ProjectSection'
import BreadCrumbs from '@/components/shared/Breadcrumbs'
import {
  projectsPersonalNext,
  projectsPersonalReact,
  projectsPersonalVue,
} from '@/data/projects/personal/projectsOverview'
import { ID } from '@/utils/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Projects | Daniel Krsiak - React Developer',
  description:
    'Explore my projects created with Next.js and React. My portfolio, crypto app, e-commerce site, all showcasing coding skills and trends in web development.',
  keywords: ['Daniel Krsiak', 'Personal Projects', 'Next.js', 'React', 'Web Development', 'Portfolio', 'Crypto Apps'],
}

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID.projects.personal}>
      <BreadCrumbs linkLevel1="/personal-projects" textLevel1="Personal Projects" />
      <ProjectsLayout
        heading="🚀 Personal Projects"
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
      >
        <ProjectSection sectionId={ID.section.next} sectionText="Next" projectData={projectsPersonalNext} />
        <ProjectSection sectionId={ID.section.react} sectionText="React" projectData={projectsPersonalReact} />
        <ProjectSection sectionId={ID.section.vue} sectionText="Vue" projectData={projectsPersonalVue} />
      </ProjectsLayout>
      <div className="mt-20">
        <NextPageNavigation
          pageLinkPrevious="/work-experience"
          pageNamePrevious="Work Experience"
          dataTestIDPrevious="page-navigation-previous-work-experience"
        />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
