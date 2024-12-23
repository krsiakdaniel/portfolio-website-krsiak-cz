import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'
import { projectsWorkReact } from '@/data/projects/work/projects-overview/workReact'
import { sections } from '@/data/projects/work/smartsuppDashboard'
import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
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

const ProjectWorkSmartsuppDashboard = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.smartsupp.dashboard, TEXT.smartsuppDashboard)}
      pageID={PAGES_URL.work.smartsupp.dashboard}
      goBackLink={GoBackLinkEnum.Work}
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
