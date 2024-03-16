import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkWordPress } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { ID_SECTION_WORDPRESS, projectPages } from '@/utils/constants'

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.smartsupp.help}
      goBackLink="work"
      sectionID={ID_SECTION_WORDPRESS}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppHelp
