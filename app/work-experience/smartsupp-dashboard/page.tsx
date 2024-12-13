import { ProjectPageLayoutWrapper } from '@/components/layout/projectPage/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/pageNavigation/PageNavigation'
import { projectsWorkReact } from '@/data/projects/work/projectsOverview/workReact'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL, URL_WORK_EXPERIENCE } from '@/utils/constants/urls/pageUrls'
import { BreadCrumbsType } from '@/utils/interfaces/types'
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
  textLevel1: TEXT.workExperience,
  linkLevel2: PAGES_URL.work.smartsupp.dashboard,
  textLevel2: TEXT.smartsuppDashboard,
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
          linkPrevious={PAGES_URL.work.mainUrl}
          namePrevious={TEXT.workExperience}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.dashboard.previous}
          linkNext={PAGES_URL.work.komercniBanka}
          nameNext={TEXT.komercniBanka}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.dashboard.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppDashboard
