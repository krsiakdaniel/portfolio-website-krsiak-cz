import { FC } from 'react'

import PageNavigation from '@/components/layout/page-navigation/PageNavigation'
import ProjectPageLayoutWrapper from '@/components/layout/projects/ProjectPageLayoutWrapper'

import { metaDataSmartsuppWeb } from '@/lib/data/metadata/pages/projects/work/metaDataSmartsuppWeb'
import { projectsWorkFrontEnd } from '@/lib/data/pages/projects/work/projects-overview/front-end/workFrontEnd'
import { sections } from '@/lib/data/pages/projects/work/smartsuppWeb'

import { ICON_EMOJI, TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PROJECT_ID } from '@/lib/utils/constants/ids/projectIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'

import { getBreadcrumbsWork } from '@/lib/utils/helpers/breadcrumbs/getBreadcrumbsWork'
import { validateProjectData } from '@/lib/utils/helpers/validateProjectData'
import { GoBackLinkEnum } from '@/lib/utils/typeDefinitions/enums'

export const metadata = {
  ...metaDataSmartsuppWeb,
}

const ProjectWorkSmartsuppWeb: FC = (): JSX.Element => {
  const projectData = validateProjectData(projectsWorkFrontEnd[0])

  return (
    <ProjectPageLayoutWrapper
      breadCrumbs={getBreadcrumbsWork(
        PAGES_URL.work.smartsupp.web,
        ICON_EMOJI.manTechnologist.lightSkinTone,
        TEXT.smartsuppWeb,
      )}
      pageID={PROJECT_ID.work.smartsupp.web}
      goBackLink={GoBackLinkEnum.Work}
      sectionID={ID.section.frontEnd}
      ariaLabel={TEXT.workExperience}
      projectData={projectData}
      sections={sections}
      PageNavigation={
        <PageNavigation
          linkPrevious={PAGES_URL.work.kooperativa}
          iconPrevious={ICON_EMOJI.umbrellaWithRainDrops}
          namePrevious={TEXT.kooperativa}
          dataTestIdPrevious={DATA_TEST_IDS.projects.work.smartsupp.web.previous}
          linkNext={PAGES_URL.work.smartsupp.help}
          iconNext={ICON_EMOJI.books}
          nameNext={TEXT.smartsuppHELP}
          dataTestIdNext={DATA_TEST_IDS.projects.work.smartsupp.web.next}
        />
      }
    />
  )
}

export default ProjectWorkSmartsuppWeb
