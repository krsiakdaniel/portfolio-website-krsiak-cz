import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { ID, PAGES_URL } from '@/utils/constants'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smartsupp Dashboard | Daniel Krsiak - React Developer',
  description:
    'Worked as a React Developer on the Smartsupp Dashboard for 3 years. Contributed to chat dashboard features, UX improvements, and modernizing the codebase.',
  keywords: [
    'Daniel Krsiak',
    'Smartsupp Dashboard',
    'Customer Care - Chat Dashboard',
    'React Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Chakra UI',
    'Cypress',
    'UX Design',
  ],
}

const breadCrumbs: BreadCrumbsType = {
  linkLevel1: '/work-experience',
  textLevel1: 'Work Experience',
  linkLevel2: '/work-experience/smartsupp-dashboard',
  textLevel2: 'Smartsupp Dashboard',
}

const ProjectWorkSmartsuppDashboard = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={breadCrumbs}
      pageID={PAGES_URL.work.smartsupp.dashboard}
      goBackLink="work"
      sectionID={ID.section.react}
      projectData={projectsWorkReact[0]}
      sections={sections}
    />
  )
}

export default ProjectWorkSmartsuppDashboard
