import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataMoravia } from '@/lib/data/metadata/pages/projects/work/metaDataMoravia'
import { sections } from '@/lib/data/pages/projects/work/moravia'
import { projectsWorkLocalization } from '@/lib/data/pages/projects/work/projects-overview/localization/workLocalization'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataMoravia,
}

const ProjectWorkMoravia: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.moravia, ICON_EMOJI.globeShowingAmericas, TEXT.moravia)}
      pageID={PROJECT_ID.work.moravia}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.localization}
      projectData={projectsWorkLocalization[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.groupon}
          iconPrevious={ICON_EMOJI.shoppingCart}
          namePrevious={TEXT.groupon}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.moravia.previous}
        />
      }
    />
  )
}

export default ProjectWorkMoravia
