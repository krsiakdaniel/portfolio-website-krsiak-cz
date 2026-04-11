import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { projectsWorkReact } from '@/data/pages/projects/work/projects-overview/workReact'
import { sections } from '@/data/pages/projects/work/smartsuppDashboard'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { metaDataSmartsuppDashboard } from '@/features/work-smartsupp-dashboard/metadata'
import { GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataSmartsuppDashboard,
}

const ProjectWorkSmartsuppDashboard = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.workSmartsuppDashboard,
        ICON_EMOJI.speechBalloon,
        TEXT.smartsuppChatDashboard,
      )}
      pageID={PROJECT_ID.work.smartsupp.dashboard}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkReact[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.workO2itsPublicTendersPortal}
          iconPrevious={ICON_EMOJI.robot}
          namePrevious={TEXT.O2itsPublicTendersPortal}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.dashboard.previous}
          linkNext={PAGES_URL.workKomercniBanka}
          iconNext={ICON_EMOJI.bank}
          nameNext={TEXT.komercniBanka}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.dashboard.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppDashboard
