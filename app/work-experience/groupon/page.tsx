import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataGroupon } from '@/lib/data/metadata/pages/projects/work/metaDataGroupon'
import { sections } from '@/lib/data/pages/projects/work/groupon'
import { projectsWorkQA } from '@/lib/data/pages/projects/work/projects-overview/quality-assurance/workQA'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata = {
  ...metaDataGroupon,
}

const ProjectWorkGroupon: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.groupon, TEXT.groupon)}
      pageID={PROJECT_ID.work.groupon}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.qa}
      projectData={projectsWorkQA[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.help}
          namePrevious={TEXT.smartsuppHELP}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.groupon.previous}
          linkNext={PAGES_URL.work.moravia}
          nameNext={TEXT.moravia}
          dataTestIdNext={DATA_TEST_IDS.projects.work.groupon.next}
        />
      }
    />
  )
}

export default ProjectWorkGroupon
