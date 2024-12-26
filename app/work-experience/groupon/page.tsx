import { Metadata } from 'next'

import { ProjectPageLayoutWrapper } from '@/components/layout/project-page/ProjectPageLayoutWrapper'
import PageNavigation from '@/components/page-navigation/PageNavigation'

import { sections } from '@/lib/data/projects/work/groupon'
import { projectsWorkQA } from '@/lib/data/projects/work/projects-overview/workQA'

import { TEXT } from '@/localization/english'
import { DATA_TEST_IDS } from '@/utils/constants/ids/dataTestIds'
import { ID } from '@/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/utils/interfaces/enums'
import { metaDataGroupon } from '@/utils/metadata/projects/work/metaDataGroupon'

export const metadata: Metadata = {
  ...metaDataGroupon,
}

const ProjectWorkGroupon = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.groupon, TEXT.groupon)}
      pageID={PAGES_URL.work.groupon}
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
