import PageContainer from '@/components/layout/PageContainer'
import ProjectsLayout from '@/components/layout/ProjectsLayout'
import {
  projectsPersonalNext,
  projectsPersonalReact,
  projectsPersonalVue,
} from '@/data/projects/personal/projectsOverview'
import { ID_PROJECTS_PERSONAL, ID_SECTION_NEXT, ID_SECTION_REACT, ID_SECTION_VUE } from '@/utils/constants'
import { ProjectSection } from './ProjectSection'

const ProjectsPersonal = () => {
  return (
    <PageContainer id={ID_PROJECTS_PERSONAL}>
      <ProjectsLayout
        heading="Personal Projects"
        description="I like to learn new technologies and create personal projects where I can apply what I know and keep up on the latest trends."
      >
        <ProjectSection
          sectionId={`${ID_PROJECTS_PERSONAL}-${ID_SECTION_NEXT}`}
          sectionText="Next"
          projectData={projectsPersonalNext}
        />
        <ProjectSection
          sectionId={`${ID_PROJECTS_PERSONAL}-${ID_SECTION_REACT}`}
          sectionText="React"
          projectData={projectsPersonalReact}
        />
        <ProjectSection
          sectionId={`${ID_PROJECTS_PERSONAL}-${ID_SECTION_VUE}`}
          sectionText="Vue"
          projectData={projectsPersonalVue}
        />
      </ProjectsLayout>
    </PageContainer>
  )
}

export default ProjectsPersonal
