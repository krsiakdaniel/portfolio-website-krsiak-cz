import { ProjectPageLayoutWrapper } from '@/components/projects/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_LOCALIZATION, projectPages } from '@/utils/constants'

const ProjectWorkMoravia = () => {
  return (
    <ProjectPageLayoutWrapper
      pageID={projectPages.work.moravia}
      goBackLink="work"
      sectionID={ID_SECTION_LOCALIZATION}
      projectData={projectsWorkLocalization[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkMoravia
