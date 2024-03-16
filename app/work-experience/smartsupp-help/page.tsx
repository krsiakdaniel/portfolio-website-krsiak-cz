import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkWordPress } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppHelp'
import { ID_SECTION_WORDPRESS, projectPages } from '@/utils/constants'
import { BreadCrumbs } from '@/utils/types'

const breadCrumbs: BreadCrumbs = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-help',
  textLevel2: 'Smartsupp Help',
}

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={projectPages.work.smartsupp.help}
      goBackLink="work"
      sectionID={ID_SECTION_WORDPRESS}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppHelp
