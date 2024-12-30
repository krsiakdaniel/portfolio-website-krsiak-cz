import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { projectsWorkReact } from '@/lib/data/projects/work/projects-overview/react/workReact'
import { sections } from '@/lib/data/projects/work/smartsuppDashboard'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { TEXT } from '@/localization/english'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'
import { metaDataSmartsuppDashboard } from '@/lib/utils/metadata/projects/work/metaDataSmartsuppDashboard'

export const metadata: Metadata = {
  ...metaDataSmartsuppDashboard,
}

const ProjectWorkSmartsuppDashboard = (): JSX.Element => {
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
