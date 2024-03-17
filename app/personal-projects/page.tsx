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
import { ID_PROJECTS_PERSONAL, ID_SECTION_NEXT, ID_SECTION_REACT, ID_SECTION_VUE } from '@/utils/constants'

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID_PROJECTS_PERSONAL}>
      <BreadCrumbs linkLevel1="/personal-projects" textLevel1="Personal Projects" />
      <ProjectsLayout
        heading="🚀 Personal Projects"
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
      >
        <ProjectSection sectionId={ID_SECTION_NEXT} sectionText="Next" projectData={projectsPersonalNext} />
        <ProjectSection sectionId={ID_SECTION_REACT} sectionText="React" projectData={projectsPersonalReact} />
        <ProjectSection sectionId={ID_SECTION_VUE} sectionText="Vue" projectData={projectsPersonalVue} />
      </ProjectsLayout>
      <div className="mt-20">
        <NextPageNavigation pageLinkPrevious="/work-experience" pageNamePrevious="Work Experience" />
      </div>
    </PageContainer>
  )
}

export default ProjectsPersonal
