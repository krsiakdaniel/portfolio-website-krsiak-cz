import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { sections } from '@/lib/data/projects/work/moravia'
import { projectsWorkLocalization } from '@/lib/data/projects/work/projects-overview/workLocalization'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
import { metaDataMoravia } from '@/utils/metadata/projects/work/metaDataMoravia'

export const metadata: Metadata = {
  ...metaDataMoravia,
}

const ProjectWorkMoravia = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.moravia, TEXT.moravia)}
      pageID={PAGES_URL.work.moravia}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.localization}
      projectData={projectsWorkLocalization[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.groupon}
          namePrevious={TEXT.groupon}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.moravia.previous}
        />
      }
    />
  )
}

export default ProjectWorkMoravia
