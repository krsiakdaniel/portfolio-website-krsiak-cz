import { ProjectPageLayoutWrapper } from '@/components/projects/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppDashboard = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.smartsupp.dashboard}
      goBackLink="work"
      sectionID={ID_SECTION_REACT}
      projectData={projectsWorkReact[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppDashboard
