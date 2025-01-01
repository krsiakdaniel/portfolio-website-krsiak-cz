import { Metadata } from 'next'

import PageNavigation from '@/components/layout/pages/navigation-previous-next/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/project-page/ProjectPageLayoutWrapper'

import { metaDataSmartsuppWeb } from '@/lib/data/metadata/pages/projects/work/metaDataSmartsuppWeb'
import { projectsWorkFrontEnd } from '@/lib/data/pages/projects/work/projects-overview/workFrontEnd'
import { sections } from '@/lib/data/pages/projects/work/smartsuppWeb'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataSmartsuppWeb,
}

const ProjectWorkSmartsuppWeb = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.smartsupp.web, TEXT.smartsuppWeb)}
      pageID={PAGES_URL.work.smartsupp.web}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.frontEnd}
      projectData={projectsWorkFrontEnd[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.kooperativa}
          namePrevious={TEXT.kooperativa}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.web.previous}
          linkNext={PAGES_URL.work.smartsupp.help}
          nameNext={TEXT.smartsuppHELP}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.web.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppWeb
