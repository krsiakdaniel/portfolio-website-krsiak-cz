import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-dashboard',
  textLevel2: 'Smartsupp Dashboard',
}

const ProjectWorkSmartsuppDashboard = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.smartsupp.dashboard}
      goBackLink="work"
      sectionID={ID_SECTION_REACT}
      projectData={projectsWorkReact[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppDashboard
