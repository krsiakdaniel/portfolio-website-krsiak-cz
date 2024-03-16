import { ProjectPageLayoutWrapper } from '@/components/projects/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { ID_SECTION_FRONT_END, projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.smartsupp.web}
      goBackLink="work"
      sectionID={ID_SECTION_FRONT_END}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppWeb
