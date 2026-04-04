import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { projectsWorkFrontEnd } from '@/data/pages/projects/work/projects-overview/workFrontEnd'
import { sections } from '@/data/pages/projects/work/smartsuppWeb'
import { metaDataSmartsuppWeb } from '@/features/work-smartsupp-web/metadata'
import { GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataSmartsuppWeb,
}

const ProjectWorkSmartsuppWeb = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.workSmartsuppWeb,
        ICON_EMOJI.manTechnologist.lightSkinTone,
        TEXT.smartsuppWeb,
      )}
      pageID={PROJECT_ID.work.smartsupp.web}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.frontEnd}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.workKooperativa}
          iconPrevious={ICON_EMOJI.umbrellaWithRainDrops}
          namePrevious={TEXT.kooperativa}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.web.previous}
          linkNext={PAGES_URL.workSmartsuppHelp}
          iconNext={ICON_EMOJI.books}
          nameNext={TEXT.smartsuppHELP}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.web.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppWeb
