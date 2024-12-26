import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { projectsWorkFrontEnd } from '@/lib/data/projects/work/projects-overview/workFrontEnd'
import { sections } from '@/lib/data/projects/work/smartsuppWeb'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
import { metaDataSmartsuppWeb } from '@/utils/metadata/projects/work/metaDataSmartsuppWeb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  ...metaDataSmartsuppWeb,
}

const ProjectWorkSmartsuppWeb = () => {
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
