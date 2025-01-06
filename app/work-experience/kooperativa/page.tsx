import { Metadata } from 'next'
import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataKooperativa } from '@/lib/data/metadata/pages/projects/work/metaDataKooperativa'
import { sections } from '@/lib/data/pages/projects/work/kooperativa'
import { projectsWorkReact } from '@/lib/data/pages/projects/work/projects-overview/react/workReact'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataKooperativa,
}

const ProjectWorkKooperativa: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.kooperativa, TEXT.kooperativa)}
      pageID={PAGES_URL.work.kooperativa}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.react}
      projectData={projectsWorkReact[1]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.komercniBanka}
          namePrevious={TEXT.komercniBanka}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.kooperativa.previous}
          linkNext={PAGES_URL.work.smartsupp.web}
          nameNext={TEXT.smartsuppWeb}
          dataTestIdNext={DATA_TEST_IDS.projects.work.kooperativa.next}
        />
      }
    />
  )
}

export default ProjectWorkKooperativa
