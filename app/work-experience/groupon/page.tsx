import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/groupon'
import { projectsWorkQA } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_QA, projectPages } from '@/utils/constants'

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.groupon}
      goBackLink="work"
      sectionID={ID_SECTION_QA}
      projectData={projectsWorkQA[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkGroupon
