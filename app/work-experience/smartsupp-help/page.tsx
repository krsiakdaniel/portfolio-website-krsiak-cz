import { Metadata } from 'next'
import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataSmartsuppHelp } from '@/lib/data/metadata/pages/projects/work/metaDataSmartsuppHelp'
import { projectsWorkWordPress } from '@/lib/data/pages/projects/work/projects-overview/wordpress/workWordpress'
import { sections } from '@/lib/data/pages/projects/work/smartsuppHelp'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/interfaces/enums'

export const metadata: Metadata = {
  ...metaDataSmartsuppHelp,
}

const ProjectWorkSmartsuppHelp: FC = (): JSX.Element => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(PAGES_URL.work.smartsupp.help, TEXT.smartsuppHELP)}
      pageID={PAGES_URL.work.smartsupp.help}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.wordpress}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.web}
          namePrevious={TEXT.smartsuppWeb}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.help.previous}
          linkNext={PAGES_URL.work.groupon}
          nameNext={TEXT.groupon}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.help.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppHelp
