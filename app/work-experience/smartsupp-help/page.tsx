import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataSmartsuppHelp } from '@/lib/data/metadata/pages/projects/work/metaDataSmartsuppHelp'
import { projectsWorkWordPress } from '@/lib/data/pages/projects/work/projects-overview/wordpress/workWordpress'
import { sections } from '@/lib/data/pages/projects/work/smartsuppHelp'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { ICON_EMOJI, TEXT } from '@/localization'

export const metadata = {
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
