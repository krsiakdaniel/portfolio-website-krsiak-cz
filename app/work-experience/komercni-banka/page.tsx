import { Metadata } from 'next'

import ProjectPageLayoutWrapper from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { metaDataKomercniBanka } from '@/lib/data/metadata/pages/projects/work/metaDataKomercniBanka'
import { sections } from '@/lib/data/pages/projects/work/komercniBanka'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataKomercniBanka,
}

const ProjectWorkKomercniBanka = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.komercniBanka, TEXT.komercniBanka)}
      pageID={PAGES_URL.work.komercniBanka}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      projectData={projectsWorkReact[2]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.dashboard}
          namePrevious={TEXT.smartsuppDashboard}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.komercniBanka.previous}
          linkNext={PAGES_URL.work.kooperativa}
          nameNext={TEXT.kooperativa}
          dataTestIdNext={DATA_TEST_IDS.projects.work.komercniBanka.next}
        />
      }
    />
  )
}

export default ProjectWorkKomercniBanka
