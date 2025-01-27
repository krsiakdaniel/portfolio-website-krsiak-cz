import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataSmartsuppDashboard } from '@/lib/data/metadata/pages/projects/work/metaDataSmartsuppDashboard'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'
import { sections } from '@/lib/data/pages/projects/work/smartsuppDashboard'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataSmartsuppDashboard,
}

const ProjectWorkSmartsuppDashboard: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.work.smartsupp.dashboard,
        ICON_EMOJI.speechBalloon,
        TEXT.smartsuppDashboard,
      )}
      pageID={PROJECT_ID.work.smartsupp.dashboard}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      projectData={projectsWorkReact[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.mainUrl}
          iconPrevious={ICON_EMOJI.manTechnologist.lightSkinTone}
          namePrevious={TEXT.workExperience}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.dashboard.previous}
          linkNext={PAGES_URL.work.komercniBanka}
          iconNext={ICON_EMOJI.bank}
          nameNext={TEXT.komercniBanka}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.dashboard.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppDashboard
