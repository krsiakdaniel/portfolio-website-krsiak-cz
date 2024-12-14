import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview/workReact'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { TEXT } from '@/localization/texts_en'
import { ID, PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants'
import { DATA_TEST_IDS } from '@/utils/dataTestIds'
import { BreadCrumbsType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Smartsupp Dashboard | ${TEXT.nameDanielKrsiak} - ${TEXT.reactDeveloper}`,
  description:
    'Worked as a React Developer on the Smartsupp Dashboard for 3 years. Contributed to chat dashboard features, UX improvements, and modernizing the codebase.',
  keywords: [
    `${TEXT.nameDanielKrsiak}`,
    `${TEXT.reactDeveloper}`,
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
  linkLevel1: URL_WORK_EXPERIENCE,
  textLevel1: 'Work Experience',
  linkLevel2: PAGES_URL.work.smartsupp.dashboard,
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
      PageNavigation={
        <PageNavigation
          linkPrevious="/work-experience"
          namePrevious="Work Experience"
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.dashboard.previous}
          linkNext="/work-experience/komercni-banka"
          nameNext="Komerční banka"
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.dashboard.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppDashboard
