import { Metadata } from 'next'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { projectsWorkWordPress } from '@/data/pages/projects/work/projects-overview/workWordpress'
import { sections } from '@/data/pages/projects/work/smartsuppHelp'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { metaDataSmartsuppHelp } from '@/features/work-smartsupp-help/metadata'
import { GoBackLinkEnum } from '@/lib/types/enums'
import { ICON_EMOJI, TEXT } from '@/localization'

export const metadata: Metadata = {
  ...metaDataSmartsuppHelp,
}

const ProjectWorkSmartsuppHelp = () => {
  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.workSmartsuppHelp,
        ICON_EMOJI.books,
        TEXT.smartsuppHELP,
      )}
      pageID={PROJECT_ID.work.smartsupp.help}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.wordpress}
      ariaLabel={TEXT.workExperience}
      projectData={projectsWorkWordPress[0]}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.workSmartsuppWeb}
          iconPrevious={ICON_EMOJI.manTechnologist.lightSkinTone}
          namePrevious={TEXT.smartsuppWeb}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.help.previous}
          linkNext={PAGES_URL.workGroupon}
          iconNext={ICON_EMOJI.shoppingCart}
          nameNext={TEXT.groupon}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.help.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppHelp
