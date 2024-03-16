import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkFrontEnd } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppWeb'
import { ID_SECTION_FRONT_END, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-web',
  textLevel2: 'Smartsupp Web',
}

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.smartsupp.web}
      goBackLink="work"
      sectionID={ID_SECTION_FRONT_END}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppWeb
