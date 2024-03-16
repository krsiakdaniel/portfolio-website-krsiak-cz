import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { sections } from '@/data/projects/work/komercniBanka'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { ID_SECTION_REACT, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/komercni-banka',
  textLevel2: 'Komerční banka',
}

const ProjectWorkKomercniBanka = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.komercniBanka}
      goBackLink="work"
      sectionID={ID_SECTION_REACT}
      projectData={projectsWorkReact[1]}
      sections={sections}
    />
  )
}

export default ProjectWorkKomercniBanka
