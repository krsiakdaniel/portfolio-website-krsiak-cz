import { ProjectPageLayoutWrapper } from '@/components/projects/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'

const ProjectWorkKomercniBanka = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.komercniBanka}
      goBackLink="work"
      sectionID={ID_SECTION_REACT}
      projectData={projectsWorkReact[1]}
      sections={sections}
    />
  )
}

export default ProjectWorkKomercniBanka
