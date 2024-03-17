import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_LOCALIZATION, projectPages } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/moravia',
  textLevel2: 'Moravia',
}

const ProjectWorkMoravia = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.moravia}
      goBackLink="work"
      sectionID={ID_SECTION_LOCALIZATION}
      projectData={projectsWorkLocalization[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkMoravia
