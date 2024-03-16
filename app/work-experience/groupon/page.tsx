import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_QA, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/groupon',
  textLevel2: 'Groupon',
}

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.groupon}
      goBackLink="work"
      sectionID={ID_SECTION_QA}
      projectData={projectsWorkQA[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkGroupon
