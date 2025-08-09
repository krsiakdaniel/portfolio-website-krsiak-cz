import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataGroupon } from '@/lib/data/metadata/pages/projects/work/metaDataGroupon'
import { sections } from '@/lib/data/pages/projects/work/groupon'
import { projectsWorkQA } from '@/lib/data/pages/projects/work/projects-overview/quality-assurance/workQA'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { validateProjectData } from '@/lib/utils/helpers/validateProjectData'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataGroupon,
}

const ProjectWorkGroupon: FC = (): JSX.Element => {
  const projectData = validateProjectData(projectsWorkQA[0])

  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.work.groupon,
        ICON_EMOJI.shoppingCart,
        TEXT.groupon,
      )}
      pageID={PROJECT_ID.work.groupon}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.qualityAssurance}
      ariaLabel={TEXT.workExperience}
      projectData={projectData}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.smartsupp.help}
          iconPrevious={ICON_EMOJI.books}
          namePrevious={TEXT.smartsuppHELP}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.groupon.previous}
          linkNext={PAGES_URL.work.moravia}
          iconNext={ICON_EMOJI.globeShowingAmericas}
          nameNext={TEXT.moravia}
          dataTestIdNext={DATA_TEST_IDS.projects.work.groupon.next}
        />
      }
    />
  )
}

export default ProjectWorkGroupon
